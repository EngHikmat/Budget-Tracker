import { Container, Heading, Grid, GridItem, VStack } from "@chakra-ui/react";
import BudgetSummary from "./components/BudgetSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <Container
      maxW="container.xl"
      py={{ base: 6, md: 10 }}
      minH="100vh"
      dir="rtl"
    >
      <VStack gap={{ base: 6, md: 8 }} align="stretch">
        {/* العنوان الرئيسي */}
        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          textAlign="center"
          color="brand.500"
          mb={{ base: 4, md: 6 }}
        >
          مدير الميزانية الشخصية
        </Heading>
        <BudgetSummary />
        {/* تقسيم الشاشة إلى نصفين */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }} // عمود واحد على الموبايل، عمودين على الشاشات الكبيرة
          gap={{ base: 4, md: 6 }} // المسافة بين الأعمدة
          w="full"
        >
          {/* النصف الأول: نموذج الإضافة */}
          <GridItem>
            <TransactionForm />
          </GridItem>
          {/* النصف الثاني: الملخص وقائمة المعاملات */}
          <GridItem>
            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              <TransactionList />
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
}

export default App;
