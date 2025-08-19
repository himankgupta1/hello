import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DBConnection {
    private static final String URL = "jdbc:h2:~/bankdb"; // stores in user home as bankdb.mv.db
    private static final String USER = "sa";
    private static final String PASSWORD = "";

    static {
        // Create table if not exists
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement()) {
            String sql = "CREATE TABLE IF NOT EXISTS customers (" +
                         "id INT AUTO_INCREMENT PRIMARY KEY," +
                         "name VARCHAR(100) NOT NULL," +
                         "email VARCHAR(100) UNIQUE NOT NULL," +
                         "phone VARCHAR(15) NOT NULL)";
            stmt.execute(sql);
        } catch (Exception e) {
            System.out.println("❌ Error initializing DB: " + e.getMessage());
        }
    }

    public static Connection getConnection() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            // System.out.println("✅ H2 Database connected!");
        } catch (Exception e) {
            System.out.println("❌ Error connecting to DB: " + e.getMessage());
        }
        return conn;
    }
}
