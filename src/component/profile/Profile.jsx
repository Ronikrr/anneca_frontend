import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import './profile.css';
import Spinner from '../../utils/spinner';



const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://anneca-backend-89l2.vercel.app/api/v1/auth/me', {
        headers: {
          Authorization: `${token}`,
        },
      });

      setUser(response.data.user);
      setName(response.data.user.name);
      setEmail(response.data.user.email);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      toast.error(err.response?.data?.message || 'Error fetching user details');
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error('Name and Email are required');
      return;
    }
    try {
      setLoading(true);
      const response = await axios.put('https://anneca-backend-89l2.vercel.app/api/v1/auth/profile/update',
        { name, email },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setUser(response.data.user);
      toast.success('Profile updated successfully');
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      toast.error(err.response?.data?.message || 'Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('All password fields are required');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }
    try {
      setLoading(true);
      await axios.post('https://anneca-backend-89l2.vercel.app/api/v1/auth/password/update',
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast.success('Password updated successfully');
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      toast.error(err.response?.data?.message || 'Error updating password');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loader"><Spinner /></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="profile-container container my-5">
      <h2 className="profile-heading">Edit Profile</h2>
      <form onSubmit={handleProfileUpdate} className="profile-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="profile-btn btn btn-primary my-2" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>

      <h2 className="profile-heading mt-5">Change Password</h2>
      <form onSubmit={handlePasswordUpdate} className="profile-password-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="oldPassword" className="form-label">Old Password</label>
              <input
                type="password"
                className="form-control"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>


          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="profile-btn btn btn-primary my-2" disabled={loading}>
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
