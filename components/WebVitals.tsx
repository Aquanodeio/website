'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals'

function sendToAnalytics(metric: Metric) {
  // Replace with your analytics service
  console.log('Web Vital:', metric)
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
    const gtag = (window as unknown as Record<string, unknown>).gtag as (
      type: string,
      name: string, 
      params: Record<string, unknown>
    ) => void;
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

export default function WebVitals() {
  useEffect(() => {
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics)  // INP replaces FID in web-vitals v3+
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  }, [])

  return null
}