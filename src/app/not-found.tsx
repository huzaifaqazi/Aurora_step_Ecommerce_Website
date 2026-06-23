'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-slate-200 dark:text-slate-800 mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
