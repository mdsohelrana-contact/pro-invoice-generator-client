/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageCircle, LinkIcon, Copy } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useStore } from "@/lib/store"
import { toast } from "sonner"
import WhatsAppIntegration from "./WhatsAppIntegration"

interface InvoiceShareProps {
  invoice: {
    invoiceNumber: string
    customerEmail: string
    customerName: string
    id: string
  }
}

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export default function InvoiceShare({ invoice }: InvoiceShareProps) {
  const { language } = useStore()
  const [activeTab, setActiveTab] = React.useState<"link" | "email" | "whatsapp">("link")

  // Avoid recalculating shareLink on each render
  const shareLink = React.useMemo(
    () => `${window.location.origin}/invoices/view/${invoice.id}`,
    [invoice.id]
  )

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
    toast.success(language === 'en' ? "Link copied to clipboard!" : "লিঙ্ক ক্লিপবোর্ডে কপি করা হয়েছে!")
  }

  const handleEmailShare = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const recipientEmail = formData.get("recipientEmail") as string
    const emailSubject = formData.get("emailSubject") as string
    const emailMessage = formData.get("emailMessage") as string

    if (!recipientEmail) {
     toast.error(language === 'en' ? "Please enter recipient email." : "প্রাপ্তকারীর ইমেল প্রবেশ করুন।")
      return
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: recipientEmail,
          subject: emailSubject,
          text: emailMessage,
          html: `<p>${emailMessage.replace(/\n/g, "<br>")}</p><p>${
            language === "en" ? "View invoice here:" : "ইনভয়েস এখানে দেখুন:"
          } <a href="${shareLink}">${shareLink}</a></p>`,
          invoiceId: invoice.id
        })
      })

      if (response.ok) {
       toast.success(language === 'en' ? "Email Sent!" : "ইমেল পাঠানো হয়েছে!")
      } else {
        const errorData = await response.json()
        toast.error(errorData.error)
      }
    } catch (error) {
      console.error("Error sending email:", error)
     toast.success(language === 'en' ? "Email Sent!" : "ইমেল পাঠানো হয়েছে!")
    }
  }

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="link">
          <LinkIcon className="mr-2 h-4 w-4" />
          {language === 'en' ? 'Link' : 'লিঙ্ক'}
        </TabsTrigger>
        <TabsTrigger value="email">
          <Mail className="mr-2 h-4 w-4" />
          {language === 'en' ? 'Email' : 'ইমেল'}
        </TabsTrigger>
        <TabsTrigger value="whatsapp">
          <MessageCircle className="mr-2 h-4 w-4" />
          {language === 'en' ? 'WhatsApp' : 'হোয়াটসঅ্যাপ'}
        </TabsTrigger>
      </TabsList>

      <AnimatePresence mode="wait">
        {activeTab === "link" && (
          <motion.div
            key="link-tab"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4 p-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="share-link">
                {language === 'en' ? 'Shareable Link' : 'শেয়ারযোগ্য লিঙ্ক'}
              </Label>
              <div className="flex space-x-2">
                <Input id="share-link" readOnly value={shareLink} />
                <Button variant="secondary" size="icon" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">
                    {language === 'en' ? 'Copy link' : 'লিঙ্ক কপি করুন'}
                  </span>
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === 'en'
                ? 'Anyone with this link can view the invoice.'
                : 'এই লিঙ্ক সহ যে কেউ ইনভয়েসটি দেখতে পারবে।'}
            </p>
          </motion.div>
        )}

        {activeTab === "email" && (
          <motion.div
            key="email-tab"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4 p-4"
          >
            <form onSubmit={handleEmailShare} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="recipientEmail">
                  {language === 'en' ? 'Recipient Email' : 'প্রাপকের ইমেল'}
                </Label>
                <Input
                  id="recipientEmail"
                  name="recipientEmail"
                  type="email"
                  defaultValue={invoice.customerEmail}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="emailSubject">
                  {language === 'en' ? 'Subject' : 'বিষয়'}
                </Label>
                <Input
                  id="emailSubject"
                  name="emailSubject"
                  defaultValue={
                    language === 'en'
                      ? `Invoice ${invoice.invoiceNumber} from ${invoice.customerName}`
                      : `${invoice.customerName} থেকে ইনভয়েস ${invoice.invoiceNumber}`
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="emailMessage">
                  {language === 'en' ? 'Message' : 'বার্তা'}
                </Label>
                <Textarea
                  id="emailMessage"
                  name="emailMessage"
                  rows={5}
                  defaultValue={
                    language === 'en'
                      ? `Dear ${invoice.customerName},\n\nPlease find your invoice ${invoice.invoiceNumber} attached.\n\nBest regards,\n${useStore.getState().company.name}`
                      : `প্রিয় ${invoice.customerName},\n\nআপনার ইনভয়েস ${invoice.invoiceNumber} সংযুক্ত করা হয়েছে।\n\nশুভেচ্ছান্তে,\n${useStore.getState().company.name}`
                  }
                />
              </div>
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Send Email' : 'ইমেল পাঠান'}
              </Button>
            </form>
          </motion.div>
        )}

        {activeTab === "whatsapp" && (
          <motion.div
            key="whatsapp-tab"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4 p-4"
          >
            <WhatsAppIntegration
              invoiceNumber={invoice.invoiceNumber}
              customerPhone={
                invoice.customerName
                  ? useStore.getState().customers.find((c) => c.name === invoice.customerName)?.phone || ''
                  : ''
              }
              shareLink={shareLink}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Tabs>
  )
}
