import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, addExpense } from "../../redux/slices/budgetSlice";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHome, faShoppingCart, faCar, faHeartbeat, faGraduationCap, faShieldAlt, faFilm, faCog } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";

const AddIncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const budgetLimits = useSelector((state) => state.budget.categoryLimits);
  const expenses = useSelector((state) => state.budget.expenses);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const categoryIcons = {
    Food: faUtensils,
    Rent: faHome,
    Shopping: faShoppingCart,
    Transportation: faCar,
    Healthcare: faHeartbeat,
    Education: faGraduationCap,
    Insurance: faShieldAlt,
    Entertainment: faFilm,
    Utilities: faCog,
    Other: faCog,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      amount: parseFloat(amount),
      category,
      description,
      date,
    };

    if (type === "income") {
      dispatch(addIncome(entry));
      toast.success(`${amount} TL gelir başarıyla eklendi.`);
    } else {
      // Gider eklenirken bütçe kontrolü
      const categoryLimit = budgetLimits[category];
      
      if (categoryLimit) {
        // Seçili kategori için mevcut toplam harcama
        const categoryExpenses = expenses
          .filter(exp => exp.category === category)
          .reduce((total, exp) => total + exp.amount, 0);
        
        // Yeni harcama eklendiğindeki toplam
        const newTotal = categoryExpenses + parseFloat(amount);
        
        // Bütçe limit kontrolü
        const limitPercentage = (newTotal / categoryLimit) * 100;
        
        if (limitPercentage >= 80) {
          toast.warn(
            `Dikkat! "${category}" kategorisinde bütçenizin %${limitPercentage.toFixed(1)}'ini kullandınız!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }
      }

      dispatch(addExpense(entry));
      toast.info(`${amount} TL gider "${category}" kategorisine eklendi.`);
    }

    // Formu sıfırla
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Gelir/Gider Ekle</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 font-medium">
                Tutar
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="category" className="block text-gray-700 font-medium">
                Kategori
              </label>
              <div className="flex items-center mt-1 p-3 w-full border rounded-md">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-transparent flex-1 focus:outline-none"
                  required
                >
                  <option value="">Kategori Seç</option>
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {category && (
                  <FontAwesomeIcon
                    icon={categoryIcons[category] || faCog}
                    className="ml-2 text-gray-600"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Tarih
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="type" className="block text-gray-700 font-medium">
              Tür
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
            >
              <option value="income">Gelir</option>
              <option value="expense">Gider</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 font-medium">
              Açıklama
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 mt-4"
          >
            Ekle
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddIncomeExpenseForm;