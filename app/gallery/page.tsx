import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function GalleryPage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      title: "فضای مشاوره",
      description: "اتاق مشاوره خصوصی با محیطی آرام و دنج",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      title: "سالن انتظار",
      description: "محیطی دلنشین برای انتظار مراجعین",
    },
    {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      title: "کتابخانه",
      description: "مجموعه‌ای غنی از کتب روانشناسی",
    },
    {
      url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
      title: "اتاق گروه درمانی",
      description: "فضای مناسب برای جلسات گروهی",
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      title: "فضای بازی درمانی",
      description: "اتاق مخصوص کودکان",
    },
    {
      url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
      title: "سالن کنفرانس",
      description: "محل برگزاری کارگاه‌ها و سمینارها",
    },
  ];

  const videos = [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "معرفی کلینیک",
      description: "آشنایی با خدمات و فضای کلینیک",
    },
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "مصاحبه با متخصصین",
      description: "گفتگو با روانشناسان مجرب کلینیک",
    },
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "کارگاه آموزشی",
      description: "نمونه‌ای از کارگاه‌های برگزار شده",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">گالری تصاویر و ویدیوها</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          در این بخش می‌توانید با فضای کلینیک، امکانات و فعالیت‌های ما آشنا شوید.
        </p>
      </div>

      <Tabs defaultValue="images" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
          <TabsTrigger value="images">تصاویر</TabsTrigger>
          <TabsTrigger value="videos">ویدیوها</TabsTrigger>
        </TabsList>

        <TabsContent value="images">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <AspectRatio ratio={16/9}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}