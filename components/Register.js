'use client';

import { useState } from 'react';
import { 
  Zap, 
  Target, 
  Smartphone, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Please enter a valid email';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\d{7,10}$/.test(formData.phone.replace(/\s/g, '')))
      errs.phone = 'Phone must be 7-10 digits';
    if (!formData.package) errs.package = 'Please select a package or event';
    if (!formData.privacy) errs.privacy = 'You must agree to the privacy policy';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="register" id="register">
      <div className="container">
        <div className="register-grid">
          <div className="register-info reveal-left">
            <span className="section-label">Register</span>
            <h2 className="section-title">
              Join the Kore<br />Community Today
            </h2>
            <p className="register-text">
              Ready to start your Kore journey? Fill out the form and we&apos;ll
              get back to you with membership details or event info within 1-2
              business days. Your details are kept secure and used only to process
              your registration.
            </p>

            <div className="register-perks">
              <div className="register-perk">
                <div className="register-perk-icon"><Zap size={20} /></div>
                <span>Fast online sign-up with instant confirmation</span>
              </div>
              <div className="register-perk">
                <div className="register-perk-icon"><Target size={20} /></div>
                <span>Option to schedule a free trial session</span>
              </div>
              <div className="register-perk">
                <div className="register-perk-icon"><Smartphone size={20} /></div>
                <span>Receive my Kore app login on confirmation</span>
              </div>
              <div className="register-perk">
                <div className="register-perk-icon"><ShieldCheck size={20} /></div>
                <span>Secure data handling — your privacy matters</span>
              </div>
              <div className="register-perk">
                <div className="register-perk-icon"><MessageSquare size={20} /></div>
                <span>Dedicated member support for questions</span>
              </div>
            </div>
          </div>

          <div className="register-form-wrapper reveal-right">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="reg-name">Full Name</label>
                  <input
                    id="reg-name"
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                  {errors.name && (
                    <p className="form-error show">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="reg-email">Email Address</label>
                  <input
                    id="reg-email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="form-error show">{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="reg-phone">Phone Number</label>
                  <input
                    id="reg-phone"
                    type="tel"
                    className="form-input"
                    placeholder="07X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                  {errors.phone && (
                    <p className="form-error show">{errors.phone}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="reg-package">Select Package / Event</label>
                  <select
                    id="reg-package"
                    className="form-select"
                    value={formData.package}
                    onChange={(e) => handleChange('package', e.target.value)}
                  >
                    <option value="">Choose an option...</option>
                    <option value="basic">Basic Plan — 5,000 LKR/mo</option>
                    <option value="pro">Pro Athlete — 15,000 LKR/mo</option>
                    <option value="team">Team Package — 40,000 LKR/mo</option>
                    <option value="event-football">City Champs Football League</option>
                    <option value="event-cricket">Summer Cricket Cup</option>
                    <option value="event-tennis">Youth Tennis Camp</option>
                    <option value="event-wellness">Women&apos;s Wellness Morning</option>
                  </select>
                  {errors.package && (
                    <p className="form-error show">{errors.package}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="reg-message">Message (Optional)</label>
                  <textarea
                    id="reg-message"
                    className="form-textarea"
                    placeholder="Any questions or comments..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={(e) => handleChange('privacy', e.target.checked)}
                    />
                    <span className="form-checkbox-text">
                      I agree to Kore&apos;s{' '}
                      <a href="#">Privacy Policy</a>. My information will not be
                      shared and is used only to confirm my registration.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="form-error show">{errors.privacy}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Registration <span className="btn-arrow"><ArrowUpRight /></span>
                </button>
              </form>
            ) : (
              <div className="form-success show">
                <div className="form-success-header">
                  <div className="form-success-icon"><CheckCircle2 size={32} /></div>
                  <h3 className="form-success-title">Welcome to Kore!</h3>
                </div>
                <p className="form-success-text">
                  Thank you for registering, {formData.name}! We&apos;ve received
                  your request and will be in touch within 1-2 business days. Check
                  your email at <strong>{formData.email}</strong> for a confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
