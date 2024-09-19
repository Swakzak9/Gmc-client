import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:3001/users/register', formData);
      console.log('Form submitted:', response.data);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setError(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError("No response from the server. Please try again later.");
      } else {
        console.error('Error message:', error.message);
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/images/university-education-logo-design-template-free-vector.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                {error && <p className="text-red-500">{error}</p>}
                
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm pl-2"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm pl-2"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 h-8 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm pl-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm pl-2"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="confirm_password"
                    className="mt-1 h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm pl-2"
                    value={formData.confirm_password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates, and company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <Link to="#" className="text-gray-700 underline"> terms and conditions </Link>
                    and
                    <Link to="#" className="text-gray-700 underline"> privacy policy</Link>.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-block shrink-0 rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-white transition ${loading ? 'bg-gray-500' : 'bg-green-500 hover:bg-transparent hover:text-blue-600'} focus:outline-none focus:ring active:text-blue-500`}
                  >
                    {loading ? 'Creating...' : 'Create an account'}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to='/login' className="text-gray-700 underline"> Log in.</Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Signup;
