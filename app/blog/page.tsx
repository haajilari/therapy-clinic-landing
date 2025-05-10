import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "راهکارهای مقابله با اضطراب در زندگی روزمره",
      excerpt: "در این مقاله به بررسی روش‌های عملی برای کاهش اضطراب و استرس در زندگی روزمره می‌پردازیم...",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
      author: "دکتر سارا محمدی",
      date: "۲ اردیبهشت ۱۴۰۲",
      category: "سلامت روان",
      readTime: "۵ دقیقه",
    },
    {
      title: "نقش والدین در رشد عاطفی کودکان",
      excerpt: "چگونه می‌توانیم به عنوان والدین در رشد عاطفی و اجتماعی فرزندانمان نقش مؤثری داشته باشیم؟",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80",
      author: "دکتر علی رضایی",
      date: "۲۵ فروردین ۱۴۰۲",
      category: "روانشناسی کودک",
      readTime: "۷ دقیقه",
    },
    {
      title: "اصول موفقیت در روابط زناشویی",
      excerpt: "بررسی مهمترین عوامل در ایجاد و حفظ یک رابطه زناشویی موفق و پایدار...",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      author: "دکتر مریم کریمی",
      date: "۱۸ فروردین ۱۴۰۲",
      category: "روابط",
      readTime: "۶ دقیقه",
    },
    {
      title: "تکنیک‌های مدیریت خشم",
      excerpt: "آشنایی با روش‌های کاربردی برای کنترل و مدیریت خشم در موقعیت‌های مختلف...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      author: "دکتر سارا محمدی",
      date: "۱۰ فروردین ۱۴۰۲",
      category: "مدیریت هیجانات",
      readTime: "۴ دقیقه",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">مقالات و آموزش</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          آخرین مقالات و مطالب آموزشی در حوزه روانشناسی و سلامت روان
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{article.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 ml-1" />
                  {article.readTime}
                </div>
              </div>
              <CardTitle className="mb-2">{article.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 ml-1" />
                  {article.author}
                </div>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                ادامه مطلب
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}