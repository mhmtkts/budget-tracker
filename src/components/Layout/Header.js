import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Personal Budget
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}