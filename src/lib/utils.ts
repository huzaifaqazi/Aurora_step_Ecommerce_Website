export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(' ');
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateDiscount(original: number, sale: number): number {
  return Math.round(((original - sale) / original) * 100);
}

export function calculateOrderSummary(subtotal: number) {
  const shipping = subtotal >= 5000 ? 0 : 250;
  const tax = subtotal * 0.17; // 17% PST
  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total,
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
