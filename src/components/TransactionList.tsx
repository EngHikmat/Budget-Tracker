import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useBudgetStore } from "../store/budgetStore";

export default function TransactionList() {
  const { transactions, removeTransaction } = useBudgetStore();

  return (
    <VStack
      gap={4}
      w="full"
      overflowY="scroll"
      h="50vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "2px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "black",
          borderRadius: "2px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#e2e8f0",
        },
      }}
    >
      {transactions.length === 0 ? (
        <Text>لا توجد معاملات بعد</Text>
      ) : (
        transactions.map((t) => (
          <Flex
            key={t.id}
            w="full"
            p={4}
            bg={t.type[0] === "income" ? "green.50" : "red.50"}
            borderRadius="md"
            justify="space-between"
            align="center"
          >
            <Box>
              <Text fontWeight="bold">{t.description}</Text>
              <Text fontSize="sm" color="gray.600">
                {new Date(t.date).toLocaleDateString()}
              </Text>
            </Box>
            <Flex align="center">
              <Text fontWeight="bold" ml={4}>
                {t.amount} دينار
              </Text>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => removeTransaction(t.id)}
              >
                حذف
              </Button>
            </Flex>
          </Flex>
        ))
      )}
    </VStack>
  );
}
