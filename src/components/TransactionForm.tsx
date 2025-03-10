import { useState } from "react";
import {
  Box,
  Button,
  createListCollection,
  Field,
  Input,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  VStack,
} from "@chakra-ui/react";
import { useBudgetStore } from "../store/budgetStore";

export default function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<string[]>([]);
  const { addTransaction } = useBudgetStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description) return;

    addTransaction({ amount: Number(amount), description, type });
    setAmount("");
    setDescription("");
  };

  const types = createListCollection({
    items: [
      { label: "إيراد", value: "income" },
      { label: "مصروف", value: "expense" },
    ],
  });

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      w="full"
      p={4}
      bg="white"
      borderRadius="md"
      shadow="md"
    >
      <VStack gap={4}>
        <Field.Root>
          <Field.Label>القيمة</Field.Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="أدخل القيمة"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>الوصف</Field.Label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="أدخل الوصف"
          />
        </Field.Root>
        <Field.Root>
          <SelectRoot
            collection={types}
            value={type}
            onValueChange={(e) => setType(e.value)}
          >
            <SelectLabel dir="rtl">النوع</SelectLabel>
            <SelectTrigger dir="rtl">
              <SelectValueText placeholder="إختر من القائمة" />
            </SelectTrigger>
            <SelectContent textAlign="right">
              {types.items.map((type) => (
                <SelectItem dir="rtl" item={type} key={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Field.Root>
        <Button type="submit" colorScheme="brand" w="full">
          إضافة
        </Button>
      </VStack>
    </Box>
  );
}
