import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        CustomerDAO dao = new CustomerDAO();

        while (true) {
            System.out.println("\n=== Bank Customer Management System (H2) ===");
            System.out.println("1. Add Customer");
            System.out.println("2. View All Customers");
            System.out.println("3. Delete Customer");
            System.out.println("4. Exit");
            System.out.print("Choose option: ");
            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter Email: ");
                    String email = sc.nextLine();
                    System.out.print("Enter Phone: ");
                    String phone = sc.nextLine();
                    dao.addCustomer(new Customer(name, email, phone));
                    break;
                case 2:
                    dao.getAllCustomers().forEach(System.out::println);
                    break;
                case 3:
                    System.out.print("Enter Customer ID to delete: ");
                    int id = sc.nextInt();
                    dao.deleteCustomer(id);
                    break;
                case 4:
                    System.out.println("👋 Exiting...");
                    sc.close();
                    System.exit(0);
                default:
                    System.out.println("⚠️ Invalid choice!");
            }
        }
    }
}
