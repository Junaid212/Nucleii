import React from "react";

const Select = ({ children, ...props }) => <div {...props}>{children}</div>;
const SelectTrigger = ({ children, className, ...props }) => <div className={className} {...props}>{children}</div>;
const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;
const SelectContent = ({ children }) => <div>{children}</div>;
const SelectItem = ({ children, value }) => <div data-value={value}>{children}</div>;

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
