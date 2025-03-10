import {
  SimpleGrid,
  Stat,
  StatHelpText,
  ProgressCircle,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useBudgetStore } from "../store/budgetStore";

export default function BudgetSummary() {
  const { getTotalIncome, getTotalExpenses, getBalance } = useBudgetStore();

  // حساب النسبة المتبقية من الإيرادات
  const totalIncome = getTotalIncome();
  const balance = getBalance();
  const remainingPercentage =
    totalIncome > 0 ? Math.max((balance / totalIncome) * 100, 0) : 0;

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
      <Stat.Root
        bg="green.100"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
      >
        <Stat.ValueText fontWeight="bold">الإيرادات</Stat.ValueText>
        <Stat.ValueUnit>{totalIncome} دينار</Stat.ValueUnit>
        <StatHelpText>إجمالي المدخلات</StatHelpText>
      </Stat.Root>
      <Stat.Root
        bg="red.100"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
      >
        <Stat.ValueText fontWeight="bold">المصروفات</Stat.ValueText>
        <Stat.ValueUnit>{getTotalExpenses()} دينار</Stat.ValueUnit>
        <StatHelpText>إجمالي المخرجات</StatHelpText>
      </Stat.Root>
      <Stat.Root
        bg="blue.100"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
      >
        <Stat.ValueText fontWeight="bold">الرصيد</Stat.ValueText>
        <Flex align="center" justify="space-between">
          <Stat.ValueUnit>{balance} دينار</Stat.ValueUnit>
          <ProgressCircle.Root size="md" value={remainingPercentage}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range />
            </ProgressCircle.Circle>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="xs"
              fontWeight="bold"
            >
              {Math.round(remainingPercentage)}%
            </Box>
          </ProgressCircle.Root>
        </Flex>
        <StatHelpText>النسبة المتبقية من الإيرادات</StatHelpText>
      </Stat.Root>
    </SimpleGrid>
  );
}
