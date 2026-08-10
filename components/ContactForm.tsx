export default function ContactForm() {
  return (
    <form className="site-form">
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@example.com" />
      </label>
      <label>
        <span>Project details</span>
        <textarea name="message" rows={6} placeholder="Tell us about your idea or project." />
      </label>
      <button type="submit" className="site-button site-button--primary">
        Send message
      </button>
    </form>
  );
}
