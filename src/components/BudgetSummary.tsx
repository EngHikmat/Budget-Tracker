import { SimpleGrid, Stat, StatLabel } from "@chakra-ui/react";
import { useBudgetStore } from "../store/budgetStore";

export default function BudgetSummary() {
  const { getTotalIncome, getTotalExpenses, getBalance } = useBudgetStore();

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
      <Stat.Root bg="green.100" p={4} borderRadius="md">
        <StatLabel fontWeight="bold">الإيرادات</StatLabel>
        <Stat.ValueUnit>{getTotalIncome()} دينار</Stat.ValueUnit>
      </Stat.Root>
      <Stat.Root bg="red.100" p={4} borderRadius="md">
        <StatLabel fontWeight="bold">المصروفات</StatLabel>
        <Stat.ValueUnit>{getTotalExpenses()} دينار</Stat.ValueUnit>
      </Stat.Root>
      <Stat.Root bg="blue.100" p={4} borderRadius="md">
        <StatLabel fontWeight="bold">الرصيد</StatLabel>
        <Stat.ValueUnit>{getBalance()} دينار</Stat.ValueUnit>
      </Stat.Root>
    </SimpleGrid>
  );
}
