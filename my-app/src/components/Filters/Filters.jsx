import s from "./Filters.module.css";
import CustomSelect from "../CustomSelect/CustomSelect";

export default function Filters({ filters, onFilter, onReset }) {
  const handleChange = (name, value) => {
    onFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.filters}>
      <CustomSelect
        label="Languages"
        options={["French", "English", "German", "Ukrainian", "Polish"]}
        value={filters.language}
        onChange={(val) => handleChange("language", val)}
      />

      <CustomSelect
        label="Level of knowledge"
        options={[
          "A1 Beginner",
          "A2 Elementary",
          "B1 Intermediate",
          "B2 Upper-Intermediate",
        ]}
        value={filters.level}
        onChange={(val) => handleChange("level", val)}
      />

      <CustomSelect
        label="Price"
        options={["10", "20", "30", "40"]}
        value={filters.price}
        onChange={(val) => handleChange("price", val)}
      />

      <button onClick={onReset} className={s.resetBtn}>
        Reset filters
      </button>
    </div>
  );
}
