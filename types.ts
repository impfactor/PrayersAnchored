import React from 'react';

export interface PricingPlan {
  name: string;
  price: string;
  limit: string;
  target: string;
  features: string[];
  highlight?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Protocol {
  code: string;
  name: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}