"use client"

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, Download, Share2, Eye, Edit, Trash2, MoreHorizontal, CheckSquare, Square, Calendar, DollarSign, Users, FileText, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import Link from 'next/link'
import { toast } from 'sonner'
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

// Mock data
const mockInvoices = [
  {
    id: 'INV-001',
    customer: 'Acme Corp',
    amount: 15000,
    currency: 'BDT' as const,
    status: 'paid' as const,
    dueDate: '2024-01-15',
    issueDate: '2024-01-01',
    items: 3
  },
  {
    id: 'INV-002',
    customer: 'Tech Solutions Ltd',
    amount: 25000,
    currency: 'BDT' as const,
    status: 'pending' as const,
    dueDate: '2024-01-20',
    issueDate: '2024-01-05',
    items: 5
  },
  {
    id: 'INV-003',
    customer: 'Digital Agency',
    amount: 8500,
    currency: 'BDT' as const,
    status: 'overdue' as const,
    dueDate: '2024-01-10',
    issueDate: '2023-12-25',
    items: 2
  },
  {
    id: 'INV-004',
    customer: 'StartupXYZ',
    amount: 12000,
    currency: 'BDT' as const,
    status: 'draft' as const,
    dueDate: '2024-01-25',
    issueDate: '2024-01-08',
    items: 4
  },
  {
    id: 'INV-005',
    customer: 'E-commerce Plus',
    amount: 35000,
    currency: 'BDT' as const,
    status: 'paid' as const,
    dueDate: '2024-01-18',
    issueDate: '2024-01-03',
    items: 7
  }
]

const statusConfig = {
  paid: {
    label: { en: 'Paid', bn: 'পরিশোধিত' },
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    icon: CheckCircle
  },
  pending: {
    label: { en: 'Pending', bn: 'অপেক্ষমাণ' },
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    icon: Clock
  },
  overdue: {
    label: { en: 'Overdue', bn: 'বকেয়া' },
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    icon: AlertCircle
  },
  draft: {
    label: { en: 'Draft', bn: 'খসড়া' },
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
    icon: FileText
  }
}

const InvoiceHome = () => {
  const language = useSelector(selectLanguage);
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [shareInvoiceId, setShareInvoiceId] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')

  const filteredInvoices = useMemo(() => {
    return mockInvoices.filter(invoice => {
      const matchesSearch = invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [searchQuery, statusFilter])

  const stats = useMemo(() => {
    const total = mockInvoices.length
    const paid = mockInvoices.filter(inv => inv.status === 'paid').length
    const pending = mockInvoices.filter(inv => inv.status === 'pending').length
    const overdue = mockInvoices.filter(inv => inv.status === 'overdue').length
    const totalAmount = mockInvoices.reduce((sum, inv) => sum + inv.amount, 0)

    return { total, paid, pending, overdue, totalAmount }
  }, [])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInvoices(filteredInvoices.map(inv => inv.id))
    } else {
      setSelectedInvoices([])
    }
  }

  const handleSelectInvoice = (invoiceId: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoices(prev => [...prev, invoiceId])
    } else {
      setSelectedInvoices(prev => prev.filter(id => id !== invoiceId))
    }
  }

  const handleBulkAction = (action: string) => {
    if (selectedInvoices.length === 0) {
      toast.error('Please select at least one invoice')
      return
    }

    if (action === 'send') {
      toast.success('Invoices sent successfully')
    } else if (action === 'delete') {
      toast.success('Invoices deleted successfully')
    }
    setSelectedInvoices([])
  }

  const formatCurrency = (amount: number, currency: string) => {
    const symbol = currency === 'BDT' ? '৳' : '$'
    return `${symbol}${amount.toLocaleString()}`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD')
  }

  return (
   <div className=" space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Invoices' : 'ইনভয়েস'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {language === 'en' 
              ? 'Manage and track your invoices' 
              : 'আপনার ইনভয়েসগুলি পরিচালনা এবং ট্র্যাক করুন'
            }
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === 'table' ? 'cards' : 'table')}
            className="hidden sm:flex"
          >
            {viewMode === 'table' ? 'Card View' : 'Table View'}
          </Button>
          <Link href="/invoices/create">
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              {language === 'en' ? 'New Invoice' : 'নতুন ইনভয়েস'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Total' : 'মোট'}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.total}
                </p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Paid' : 'পরিশোধিত'}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.paid}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Pending' : 'অপেক্ষমাণ'}
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.pending}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Overdue' : 'বকেয়া'}
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {stats.overdue}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder={language === 'en' ? 'Search invoices...' : 'ইনভয়েস অনুসন্ধান...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={language === 'en' ? 'Filter by status' : 'স্ট্যাটাস অনুযায়ী ফিল্টার'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === 'en' ? 'All Status' : 'সব স্ট্যাটাস'}
                </SelectItem>
                <SelectItem value="paid">
                  {language === 'en' ? 'Paid' : 'পরিশোধিত'}
                </SelectItem>
                <SelectItem value="pending">
                  {language === 'en' ? 'Pending' : 'অপেক্ষমাণ'}
                </SelectItem>
                <SelectItem value="overdue">
                  {language === 'en' ? 'Overdue' : 'বকেয়া'}
                </SelectItem>
                <SelectItem value="draft">
                  {language === 'en' ? 'Draft' : 'খসড়া'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bulk Actions */}
          {selectedInvoices.length > 0 && (
            <div className="flex items-center gap-2 mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-sm text-blue-700 dark:text-blue-300">
                {selectedInvoices.length} {language === 'en' ? 'selected' : 'নির্বাচিত'}
              </span>
              <div className="flex gap-2 ml-auto">
                <Button size="sm" variant="outline" onClick={() => handleBulkAction('Download')}>
                  <Download className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'Download' : 'ডাউনলোড'}
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleBulkAction('Delete')}>
                  <Trash2 className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'Delete' : 'মুছুন'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Invoices Table/Cards */}
      <Card>
        <CardContent className="p-0">
          {viewMode === 'table' ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedInvoices.length === filteredInvoices.length && filteredInvoices.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>{language === 'en' ? 'Invoice' : 'ইনভয়েস'}</TableHead>
                    <TableHead>{language === 'en' ? 'Customer' : 'গ্রাহক'}</TableHead>
                    <TableHead>{language === 'en' ? 'Amount' : 'পরিমাণ'}</TableHead>
                    <TableHead>{language === 'en' ? 'Status' : 'স্ট্যাটাস'}</TableHead>
                    <TableHead>{language === 'en' ? 'Due Date' : 'পরিশোধের তারিখ'}</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.map((invoice) => {
                    const StatusIcon = statusConfig[invoice.status].icon
                    return (
                      <TableRow key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <TableCell>
                          <Checkbox
                            checked={selectedInvoices.includes(invoice.id)}
                            onCheckedChange={(checked) => handleSelectInvoice(invoice.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell className="font-semibold">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </TableCell>
                        <TableCell>
                          <Badge className={statusConfig[invoice.status].color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig[invoice.status].label[language]}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'View' : 'দেখুন'}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'Edit' : 'সম্পাদনা'}
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setShareInvoiceId(invoice.id)}>
                                <Share2 className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'Share' : 'শেয়ার'}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'Download' : 'ডাউনলোড'}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'Delete' : 'মুছুন'}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {filteredInvoices.map((invoice) => {
                const StatusIcon = statusConfig[invoice.status].icon
                return (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {invoice.id}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {invoice.customer}
                        </p>
                      </div>
                      <Checkbox
                        checked={selectedInvoices.includes(invoice.id)}
                        onCheckedChange={(checked) => handleSelectInvoice(invoice.id, checked as boolean)}
                      />
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'en' ? 'Amount' : 'পরিমাণ'}
                        </span>
                        <span className="font-semibold">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'en' ? 'Due Date' : 'পরিশোধের তারিখ'}
                        </span>
                        <span className="text-sm">
                          {formatDate(invoice.dueDate)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge className={statusConfig[invoice.status].color}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusConfig[invoice.status].label[language]}
                      </Badge>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'View' : 'দেখুন'}
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Edit' : 'সম্পাদনা'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShareInvoiceId(invoice.id)}>
                            <Share2 className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Share' : 'শেয়ার'}
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Download' : 'ডাউনলোড'}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Delete' : 'মুছুন'}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {filteredInvoices.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'No invoices found' : 'কোন ইনভয়েস পাওয়া যায়নি'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {language === 'en' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'আপনার অনুসন্ধান বা ফিল্টার মানদণ্ড সামঞ্জস্য করার চেষ্টা করুন'
                }
              </p>
              <Link href="/invoices/create">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Create First Invoice' : 'প্রথম ইনভয়েস তৈরি করুন'}
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Share Modal */}
      {/* {shareInvoiceId && (
        <InvoiceShare
          invoiceId={shareInvoiceId}
          onClose={() => setShareInvoiceId(null)}
        />
      )} */}
    </div>
  )
}

export default InvoiceHome