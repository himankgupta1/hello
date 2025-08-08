import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TopGuns Bank</Link>
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/customers">Customers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return <div className="container mt-3"><h2>Welcome to TopGuns Bank</h2><p>Manage customer details and accounts here.</p></div>;
}

function About() {
  return <div className="container mt-3"><h2>About the Bank</h2><p>This application helps manage customers and their bank account details.</p></div>;
}

function Customers({ customers, setCustomers }) {
  const navigate = useNavigate();

  const deleteCustomer = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div className="container mt-3">
      <h2>Customers List</h2>
      <button className="btn btn-primary mb-2" onClick={() => navigate('/add')}>Create new customer</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>
                <button className="btn btn-link" onClick={() => navigate(`/details/${c.id}`)}>Show</button>
                <button className="btn btn-link" onClick={() => navigate(`/edit/${c.id}`)}>Edit</button>
                <button className="btn btn-link text-danger" onClick={() => deleteCustomer(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CustomerDetails({ customers }) {
  const { id } = useParams();
  const customer = customers.find(c => c.id.toString() === id);

  if (!customer) return <div className="container mt-3"><h3>Customer not found</h3></div>;

  return (
    <div className="container mt-3">
      <Link to="/customers">&lt; Back to Customers List</Link>
      <h3>Customer Details</h3>
      <p><b>ID:</b> {customer.id}</p>
      <p><b>First Name:</b> {customer.firstName}</p>
      <p><b>Last Name:</b> {customer.lastName}</p>
      <p><b>Email:</b> {customer.email}</p>
      <h4>List of Accounts</h4>
      <table className="table table-bordered">
        <thead>
          <tr><th>Account No</th><th>Type</th><th>Branch</th><th>Balance</th></tr>
        </thead>
        <tbody>
          {customer.accounts.map((a, i) => (
            <tr key={i}>
              <td>{a.accountNo}</td>
              <td>{a.type}</td>
              <td>{a.branch}</td>
              <td>{a.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CustomerForm({ customers, setCustomers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = Boolean(id);

  const existing = customers.find(c => c.id.toString() === id) || { firstName: "", lastName: "", email: "", phone: "", accounts: [] };
  const [form, setForm] = useState(existing);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      alert("Please fill all required fields!");
      return;
    }
    if (editing) {
      setCustomers(customers.map(c => c.id.toString() === id ? form : c));
    } else {
      setCustomers([...customers, { ...form, id: customers.length + 1 }]);
    }
    navigate('/customers');
  };

  return (
    <div className="container mt-3">
      <Link to="/customers">&lt; Back to Customers List</Link>
      <h3>{editing ? "Edit" : "Add"} Customer</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>First Name</label>
          <input className="form-control" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
        </div>
        <div className="mb-2">
          <label>Last Name</label>
          <input className="form-control" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="mb-2">
          <label>Phone</label>
          <input className="form-control" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
        <button className="btn btn-success">{editing ? "Update" : "Create"} Customer</button>
      </form>
    </div>
  );
}

export default function App() {
  const [customers, setCustomers] = useState([
    { id: 1, firstName: "Sundar", lastName: "Pichai", email: "sundar.pichai@google.com", accounts: [{ accountNo: "1001999", type: "SAVINGS_ACCOUNT", branch: "Bellandur", balance: 1000 }, { accountNo: "1001888", type: "SAVINGS_ACCOUNT", branch: "Indira Nagar", balance: 2000 }] },
    { id: 2, firstName: "Jeff", lastName: "Bezos", email: "jeff.bezos@amazon.com", accounts: [] },
    { id: 3, firstName: "Satya", lastName: "Nadella", email: "satya.nadella@microsoft.com", accounts: [] },
    { id: 4, firstName: "Sergey", lastName: "Brin", email: "sergey.brin@google.com", accounts: [] },
    { id: 5, firstName: "Larry", lastName: "Page", email: "larry.page@google.com", accounts: [] }
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customers" element={<Customers customers={customers} setCustomers={setCustomers} />} />
        <Route path="/details/:id" element={<CustomerDetails customers={customers} />} />
        <Route path="/add" element={<CustomerForm customers={customers} setCustomers={setCustomers} />} />
        <Route path="/edit/:id" element={<CustomerForm customers={customers} setCustomers={setCustomers} />} />
      </Routes>
    </Router>
  );
}

