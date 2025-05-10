import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">درباره ما</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              کلینیک روانشناسی ما با هدف ارتقای سلامت روان جامعه و ارائه خدمات مشاوره‌ای با کیفیت فعالیت می‌کند.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  مقالات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">info@clinic.com</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">تهران، خیابان ولیعصر</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} کلینیک روانشناسی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;