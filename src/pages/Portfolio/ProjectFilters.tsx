import { Button } from '@/components/ui/button';
import { Category } from './types';

interface ProjectFiltersProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

const categories: Array<Category | 'all'> = [
  'all',
  'Branding',
  'UI/UX',
  'Print',
  'Illustration',
  'Motion',
];

export default function ProjectFilters({
  selectedCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}