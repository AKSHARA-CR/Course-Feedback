const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
  type: String, 
  required: true,
  trim: true,
},

  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { 
    type: String, 
    required: true,
  },
  phoneNumber: { 
    type: String,
    default: '',
  },
  dateOfBirth: { 
    type: Date,
  },
  address: { 
    type: String,
    default: '',
  },
  profilePicture: { 
    type: String,
    default: '', // store URL of profile image
  },
  role: { 
    type: String, 
    enum: ['student', 'admin'], 
    default: 'student',
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
