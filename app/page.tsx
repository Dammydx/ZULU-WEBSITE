'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, MapPin, DollarSign, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `
            url('/assets/Gradient.png'),
            url('/assets/Nigerian local market.png')
          `,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-white md:text-6xl"
          >
            Shop Smart. Eat Healthy. Eat Zolu.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-xl text-white"
          >
            Nigeria&apos;s first digital market hub connecting vendors, agro
            brands, and consumers into one trusted ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-lg text-gray-200"
          >
            Buy and sell locally, anywhere in Nigeria. Zolu brings your market
            to your phone — secure, fast, and reliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/get-started">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Join Zolu Today
              </Button>
            </Link>
            <Link href="#why-zolu">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                Explore Markets
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-white" />
          </motion.div>
        </div>
      </section>

      <section id="why-zolu" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why Choose Zolu?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the future of local market shopping
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Trusted & Verified
                </h3>
                <p className="text-gray-600">
                  Every vendor and brand undergoes strict verification to ensure
                  quality and authenticity
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Local & Convenient
                </h3>
                <p className="text-gray-600">
                  Discover markets and vendors near you with fast, reliable
                  delivery to your doorstep
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <DollarSign className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Best Prices
                </h3>
                <p className="text-gray-600">
                  Get authentic products directly from vendors at competitive
                  prices with exclusive deals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Experience Local Markets Like Never Before?
          </h2>
          <p className="mb-8 text-xl text-emerald-50">
            Join thousands of happy customers, vendors, and brands on Zolu
          </p>
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
