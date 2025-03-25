interface ServiceBadgeProps {
    name: string;
    color: "blue" | "purple" | "orange";
  }
  
  const colorMap = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  };
  
  export default function ServiceBadge({ name, color }: ServiceBadgeProps) {
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]}`}>
        {name}
      </span>
    );
  }