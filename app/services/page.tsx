import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  Users,
  Heart,
  Baby,
  Puzzle,
  GraduationCap,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "مشاوره فردی",
      description: "جلسات خصوصی برای حل مشکلات فردی، اضطراب، افسردگی و مدیریت استرس",
      features: ["جلسات ۴۵ دقیقه‌ای", "مشاوره حضوری و آنلاین", "برنامه درمانی اختصاصی"],
    },
    {
      icon: Users,
      title: "زوج درمانی",
      description: "کمک به زوج‌ها برای بهبود روابط و حل تعارضات زناشویی",
      features: ["مشاوره پیش از ازدواج", "حل تعارضات زناشویی", "بهبود روابط عاطفی"],
    },
    {
      icon: Baby,
      title: "روانشناسی کودک",
      description: "خدمات تخصصی برای کودکان با مشکلات رفتاری و عاطفی",
      features: ["بازی درمانی", "مشاوره والدین", "تشخیص و درمان اختلالات رشدی"],
    },
    {
      icon: Puzzle,
      title: "گروه درمانی",
      description: "جلسات گروهی برای رشد فردی و یادگیری مهارت‌های اجتماعی",
      features: ["جلسات هفتگی", "موضوعات متنوع", "تعامل با همتایان"],
    },
    {
      icon: GraduationCap,
      title: "کارگاه‌های آموزشی",
      description: "دوره‌های آموزشی برای ارتقای مهارت‌های زندگی",
      features: ["مدیریت استرس", "مهارت‌های ارتباطی", "فرزندپروری"],
    },
    {
      icon: Heart,
      title: "مشاوره خانواده",
      description: "کمک به خانواده‌ها برای ایجاد محیطی سالم و پویا",
      features: ["حل تعارضات خانوادگی", "بهبود روابط والد-فرزند", "مشاوره تربیتی"],
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">خدمات ما</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ما مجموعه‌ای از خدمات تخصصی روانشناسی و مشاوره را برای کمک به سلامت روان شما ارائه می‌دهیم.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <ArrowLeft className="h-4 w-4 ml-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">رزرو مشاوره</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}