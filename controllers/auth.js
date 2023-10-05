import User from '../models/User.js';

export const authorise = async (req, res) => {
  const { username, password } = req.query;
  try {
    // Находим пользователя по логину в базе данных
    let user = await User.findOne({ userName: username });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    const admin = {
      id: user.id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      country: user.country,
      followers: user.followers,
      friends: user.friends,
    };

    // Вход успешен
    res.status(200).json({ message: 'Вход выполнен успешно', admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};