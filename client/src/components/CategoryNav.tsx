import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryNavProps {
  onCategoryChange: (category: string) => void;
  categories: string[];
 }

function CategoryNav({ onCategoryChange, categories }: CategoryNavProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    onCategoryChange(category);
  }

  return (
    <Tabs
      value={selectedCategory}
      onValueChange={handleCategoryChange}
      className="flex flex-1 items-center justify-center 
    w-screen
    "
    >
      <TabsList>
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default CategoryNav;
export default CategoryNav;
