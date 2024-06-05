import Testimonial from '../models/testimonialModel.js'
export const getAllTestimonials = async (req, res) => {
    try {
      const testimonials = await Testimonial.find({});
      res.status(200).json({testimonials});
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
    }
  };
  

