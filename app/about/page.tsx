import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, BookOpen } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "دکتر سارا محمدی",
      role: "روانشناس بالینی",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      specialties: "درمان افسردگی و اضطراب",
    },
    {
      name: "دکتر علی رضایی",
      role: "روانشناس کودک",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      specialties: "مشکلات رفتاری کودکان",
    },
    {
      name: "دکتر مریم کریمی",
      role: "مشاور خانواده",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      specialties: "مشاوره پیش از ازدواج و زوج درمانی",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "همدلی و درک",
      description: "ایجاد فضای امن و حمایتگر برای مراجعین",
    },
    {
      icon: Award,
      title: "تخصص و تعهد",
      description: "ارائه خدمات با بالاترین استانداردهای علمی",
    },
    {
      icon: Users,
      title: "رویکرد فردی",
      description: "توجه به نیازهای منحصر به فرد هر مراجع",
    },
    {
      icon: BookOpen,
      title: "یادگیری مستمر",
      description: "به‌روزرسانی دانش و مهارت‌های تخصصی",
    },
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">درباره کلینیک ما</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ما با بیش از ۱۵ سال تجربه در حوزه سلامت روان، متعهد به ارائه خدمات تخصصی روانشناسی و مشاوره هستیم.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {values.map((value, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">تیم متخصصین ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialties}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}