import React from "react";

export const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`px-6 py-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-lg font-bold ${className}`} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);
