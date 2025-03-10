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
        bg="brand.500"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
        color="white"
      >
        <Stat.ValueText fontWeight="bold">الإيرادات</Stat.ValueText>
        <Stat.ValueUnit color="white">{totalIncome} دينار</Stat.ValueUnit>
        <StatHelpText color="white">إجمالي المدخلات</StatHelpText>
      </Stat.Root>
      <Stat.Root
        bg="brand.500"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
        color="white"
      >
        <Stat.ValueText fontWeight="bold">المصروفات</Stat.ValueText>
        <Stat.ValueUnit color="white">
          {getTotalExpenses()} دينار
        </Stat.ValueUnit>
        <StatHelpText color="white">إجمالي المخرجات</StatHelpText>
      </Stat.Root>
      <Stat.Root
        bg="brand.500"
        p={4}
        borderRadius="lg"
        shadow="md"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
        color="white"
      >
        <Stat.ValueText fontWeight="bold">الرصيد</Stat.ValueText>
        <Flex align="start" justify="space-between">
          <Stat.ValueUnit color="white">{balance} دينار</Stat.ValueUnit>
          <ProgressCircle.Root size="md" value={remainingPercentage}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range stroke="green.500" />
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
        <StatHelpText color="white">النسبة المتبقية من الإيرادات</StatHelpText>
      </Stat.Root>
    </SimpleGrid>
  );
}
