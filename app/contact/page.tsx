import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">تماس با ما</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ما آماده پاسخگویی به سوالات شما هستیم. برای دریافت مشاوره یا رزرو نوبت با ما در تماس باشید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          {[
            {
              icon: Phone,
              title: "تلفن تماس",
              details: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۹۱۲۳۴۵۶۷۸۹"],
            },
            {
              icon: Mail,
              title: "ایمیل",
              details: ["info@clinic.com", "support@clinic.com"],
            },
            {
              icon: MapPin,
              title: "آدرس",
              details: ["تهران، خیابان ولیعصر", "ساختمان پزشکان، طبقه ۴"],
            },
            {
              icon: Clock,
              title: "ساعات کاری",
              details: ["شنبه تا پنجشنبه: ۹ صبح تا ۸ شب", "جمعه: تعطیل"],
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-start space-x-4 space-x-reverse p-6">
                <item.icon className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">فرم تماس</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      نام و نام خانوادگی
                    </label>
                    <Input id="name" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      شماره تماس
                    </label>
                    <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    ایمیل
                  </label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    موضوع
                  </label>
                  <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    پیام
                  </label>
                  <Textarea
                    id="message"
                    placeholder="پیام خود را بنویسید"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full">ارسال پیام</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}