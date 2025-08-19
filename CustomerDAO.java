import java.sql.*;
import java.util.*;

public class CustomerDAO {

    public void addCustomer(Customer customer) {
        String sql = "INSERT INTO customers(name, email, phone) VALUES (?, ?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, customer.getName());
            stmt.setString(2, customer.getEmail());
            stmt.setString(3, customer.getPhone());
            stmt.executeUpdate();
            System.out.println("✅ Customer added successfully!");
        } catch (Exception e) {
            System.out.println("❌ Error adding customer: " + e.getMessage());
        }
    }

    public void deleteCustomer(int id) {
        String sql = "DELETE FROM customers WHERE id=?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            int rows = stmt.executeUpdate();
            if (rows > 0)
                System.out.println("✅ Customer deleted successfully!");
            else
                System.out.println("⚠️ No customer found with ID " + id);
        } catch (Exception e) {
            System.out.println("❌ Error deleting customer: " + e.getMessage());
        }
    }

    public List<Customer> getAllCustomers() {
        List<Customer> customers = new ArrayList<>();
        String sql = "SELECT * FROM customers";
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                customers.add(new Customer(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("email"),
                        rs.getString("phone")
                ));
            }
        } catch (Exception e) {
            System.out.println("❌ Error fetching customers: " + e.getMessage());
        }
        return customers;
    }
}
