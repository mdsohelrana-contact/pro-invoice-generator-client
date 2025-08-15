'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Plus, Trash2, Save, Send, Eye, Calculator, User, Building, FileText, Calendar } from 'lucide-react'
import { toast } from 'sonner'

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

const CreateInvoicePage = () => {
    const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Invoice data
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    currency: 'BDT',
    status: 'draft',
    notes: '',
    terms: 'Payment due within 30 days'
  })

  // Customer data
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false)

  // Invoice items
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: '1',
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }
  ])

  // Mock customers data
  const customers: Customer[] = [
    {
      id: '1',
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      phone: '+880 1712-345678',
      address: 'Dhaka, Bangladesh'
    },
    {
      id: '2',
      name: 'Fatima Rahman',
      email: 'fatima@example.com',
      phone: '+880 1812-345678',
      address: 'Chittagong, Bangladesh'
    }
  ]

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }
    setItems([...items, newItem])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value }
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate
        }
        return updatedItem
      }
      return item
    }))
  }

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.15 // 15% tax
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const handleCustomerSelect = (customerId: string) => {
    const customer = customers.find(c => c.id === customerId)
    if (customer) {
      setSelectedCustomer(customer)
      setShowNewCustomerForm(false)
    }
  }

  const handleCreateCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) {
     toast.error("Please enter customer name and email.")
      return
    }

    const customer: Customer = {
      id: Date.now().toString(),
      ...newCustomer
    }
    setSelectedCustomer(customer)
    setShowNewCustomerForm(false)
    setNewCustomer({ name: '', email: '', phone: '', address: '' })
    
    toast.success("Customer created successfully.")
  }

  const handleSaveInvoice = async (status: 'draft' | 'sent') => {
    if (!selectedCustomer) {
      toast.error("Please select a customer.")
      return
    }

    if (items.some(item => !item.description || item.rate <= 0)) {
      toast.error("Please enter valid item details.")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const invoice = {
        ...invoiceData,
        status,
        customer: selectedCustomer,
        items,
        subtotal: calculateSubtotal(),
        tax: calculateTax(),
        total: calculateTotal()
      }

      console.log('Saving invoice:', invoice)

      toast.success("Invoice saved successfully.")

      router.push('/dashboard')
    } catch (error) {
      console.error('Error saving invoice:', error)
      toast.error("Failed to save invoice.")
    } finally {
      setIsLoading(false)
    }
  }

  const steps = [
    { number: 1, title: 'Customer Info', icon: User },
    { number: 2, title: 'Invoice Details', icon: FileText },
    { number: 3, title: 'Items & Pricing', icon: Calculator },
    { number: 4, title: 'Review & Send', icon: Send }
  ]

  return (
   <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Create New Invoice</h1>
              <p className="text-gray-600">Invoice #{invoiceData.invoiceNumber}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm">
            {invoiceData.status.charAt(0).toUpperCase() + invoiceData.status.slice(1)}
          </Badge>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Customer Information</span>
                  </CardTitle>
                  <CardDescription>
                    Select an existing customer or create a new one
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!showNewCustomerForm ? (
                    <>
                      <div>
                        <Label htmlFor="customer">Select Customer</Label>
                        <Select onValueChange={handleCustomerSelect}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a customer" />
                          </SelectTrigger>
                          <SelectContent>
                            {customers.map(customer => (
                              <SelectItem key={customer.id} value={customer.id}>
                                <div>
                                  <p className="font-medium">{customer.name}</p>
                                  <p className="text-sm text-gray-500">{customer.email}</p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="text-center">
                        <Button
                          variant="outline"
                          onClick={() => setShowNewCustomerForm(true)}
                          className="flex items-center space-x-2"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Create New Customer</span>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">New Customer</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowNewCustomerForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="customerName">Name *</Label>
                          <Input
                            id="customerName"
                            value={newCustomer.name}
                            onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                            placeholder="Customer name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerEmail">Email *</Label>
                          <Input
                            id="customerEmail"
                            type="email"
                            value={newCustomer.email}
                            onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                            placeholder="customer@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="customerPhone">Phone</Label>
                          <Input
                            id="customerPhone"
                            value={newCustomer.phone}
                            onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                            placeholder="+880 1712-345678"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerAddress">Address</Label>
                          <Input
                            id="customerAddress"
                            value={newCustomer.address}
                            onChange={(e) => setNewCustomer({...newCustomer, address: e.target.value})}
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                      
                      <Button onClick={handleCreateCustomer} className="w-full">
                        Create Customer
                      </Button>
                    </div>
                  )}

                  {selectedCustomer && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-800">Selected Customer</h4>
                      <div className="mt-2 text-sm text-green-700">
                        <p><strong>{selectedCustomer.name}</strong></p>
                        <p>{selectedCustomer.email}</p>
                        {selectedCustomer.phone && <p>{selectedCustomer.phone}</p>}
                        {selectedCustomer.address && <p>{selectedCustomer.address}</p>}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 2: Invoice Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Invoice Details</span>
                  </CardTitle>
                  <CardDescription>
                    Set up your invoice information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="invoiceNumber">Invoice Number</Label>
                      <Input
                        id="invoiceNumber"
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => setInvoiceData({...invoiceData, invoiceNumber: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select
                        value={invoiceData.currency}
                        onValueChange={(value) => setInvoiceData({...invoiceData, currency: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BDT">BDT (৳)</SelectItem>
                          <SelectItem value="USD">USD ($)</SelectItem>
                          <SelectItem value="EUR">EUR (€)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Invoice Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={invoiceData.date}
                        onChange={(e) => setInvoiceData({...invoiceData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={invoiceData.dueDate}
                        onChange={(e) => setInvoiceData({...invoiceData, dueDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={invoiceData.notes}
                      onChange={(e) => setInvoiceData({...invoiceData, notes: e.target.value})}
                      placeholder="Additional notes for the customer"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="terms">Terms & Conditions</Label>
                    <Textarea
                      id="terms"
                      value={invoiceData.terms}
                      onChange={(e) => setInvoiceData({...invoiceData, terms: e.target.value})}
                      placeholder="Payment terms and conditions"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Items & Pricing */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5" />
                    <span>Items & Pricing</span>
                  </CardTitle>
                  <CardDescription>
                    Add items and set pricing for your invoice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Item {index + 1}</h4>
                          {items.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="md:col-span-2">
                            <Label>Description</Label>
                            <Input
                              value={item.description}
                              onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                              placeholder="Item description"
                            />
                          </div>
                          <div>
                            <Label>Quantity</Label>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                            />
                          </div>
                          <div>
                            <Label>Rate ({invoiceData.currency})</Label>
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.rate}
                              onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                            />
                          </div>
                        </div>
                        
                        <div className="mt-3 text-right">
                          <span className="text-sm text-gray-600">Amount: </span>
                          <span className="font-medium">
                            {invoiceData.currency === 'BDT' ? '৳' : '$'}{item.amount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    <Button
                      variant="outline"
                      onClick={addItem}
                      className="w-full flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Item</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review & Send */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Review & Send</span>
                  </CardTitle>
                  <CardDescription>
                    Review your invoice before sending
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Customer Info */}
                    <div>
                      <h4 className="font-medium mb-2">Bill To:</h4>
                      {selectedCustomer && (
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">{selectedCustomer.name}</p>
                          <p>{selectedCustomer.email}</p>
                          {selectedCustomer.phone && <p>{selectedCustomer.phone}</p>}
                          {selectedCustomer.address && <p>{selectedCustomer.address}</p>}
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Invoice Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Invoice Number:</p>
                        <p className="font-medium">{invoiceData.invoiceNumber}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Date:</p>
                        <p className="font-medium">{invoiceData.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Due Date:</p>
                        <p className="font-medium">{invoiceData.dueDate || 'Not set'}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Currency:</p>
                        <p className="font-medium">{invoiceData.currency}</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Items */}
                    <div>
                      <h4 className="font-medium mb-3">Items:</h4>
                      <div className="space-y-2">
                        {items.map((item, index) => (
                          <div key={item.id} className="flex justify-between items-center text-sm">
                            <div className="flex-1">
                              <p className="font-medium">{item.description}</p>
                              <p className="text-gray-600">
                                {item.quantity} × {invoiceData.currency === 'BDT' ? '৳' : '$'}{item.rate.toFixed(2)}
                              </p>
                            </div>
                            <div className="font-medium">
                              {invoiceData.currency === 'BDT' ? '৳' : '$'}{item.amount.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (15%):</span>
                        <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateTax().toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>

                    {invoiceData.notes && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-medium mb-2">Notes:</h4>
                          <p className="text-sm text-gray-600">{invoiceData.notes}</p>
                        </div>
                      </>
                    )}

                    {invoiceData.terms && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-medium mb-2">Terms & Conditions:</h4>
                          <p className="text-sm text-gray-600">{invoiceData.terms}</p>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={() => {
                    if (currentStep === 1 && !selectedCustomer) {
                      toast.error
                      return
                    }
                    setCurrentStep(currentStep + 1)
                  }}
                >
                  Next
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleSaveInvoice('draft')}
                    disabled={isLoading}
                    className="flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Draft</span>
                  </Button>
                  <Button
                    onClick={() => handleSaveInvoice('sent')}
                    disabled={isLoading}
                    className="flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isLoading ? 'Sending...' : 'Send Invoice'}</span>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Invoice Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Invoice Preview</CardTitle>
                <CardDescription>
                  Live preview of your invoice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">INVOICE</h3>
                  <p className="text-sm text-gray-600">#{invoiceData.invoiceNumber}</p>
                </div>

                <Separator />

                {selectedCustomer && (
                  <div>
                    <h4 className="font-medium text-sm mb-1">Bill To:</h4>
                    <div className="text-xs text-gray-600">
                      <p className="font-medium">{selectedCustomer.name}</p>
                      <p>{selectedCustomer.email}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-gray-600">Date:</p>
                    <p className="font-medium">{invoiceData.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Due:</p>
                    <p className="font-medium">{invoiceData.dueDate || 'Not set'}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div key={item.id} className="text-xs">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.description || `Item ${index + 1}`}</span>
                        <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{item.amount.toFixed(2)}</span>
                      </div>
                      <div className="text-gray-500">
                        {item.quantity} × {invoiceData.currency === 'BDT' ? '৳' : '$'}{item.rate.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (15%):</span>
                    <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateTax().toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>{invoiceData.currency === 'BDT' ? '৳' : '$'}{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoicePage;
