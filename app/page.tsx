import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Calendar, BookOpen, Award, ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            مسیر سلامت روان شما
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            با تیم متخصص روانشناسی ما، مسیر رشد و شکوفایی خود را بیابید. مشاوره تخصصی برای زندگی بهتر.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              رزرو مشاوره
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">خدمات ما</h2>
            <p className="text-muted-foreground">ارائه خدمات تخصصی روانشناسی و مشاوره</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "مشاوره فردی",
                description: "جلسات خصوصی برای حل مشکلات فردی و رشد شخصی",
                icon: Brain,
              },
              {
                title: "زوج درمانی",
                description: "بهبود روابط و حل مشکلات زناشویی",
                icon: Users,
              },
              {
                title: "مشاوره آنلاین",
                description: "دسترسی به خدمات مشاوره از هر نقطه",
                icon: Calendar,
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">چرا ما را انتخاب کنید</h2>
            <p className="text-muted-foreground">متخصصان مجرب در کنار شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "تیم متخصص",
                description: "روانشناسان مجرب و با تجربه",
                icon: Award,
              },
              {
                title: "محیط امن",
                description: "فضای امن و محرمانه برای مراجعین",
                icon: Users,
              },
              {
                title: "رویکرد علمی",
                description: "استفاده از جدیدترین متدهای درمانی",
                icon: BookOpen,
              },
              {
                title: "پشتیبانی ۲۴/۷",
                description: "در دسترس بودن در تمام ساعات",
                icon: Calendar,
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <feature.icon className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}