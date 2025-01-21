const users = [
  {
    id: 1,
    email: "test@gmail.com",
    password: "test1234",
    name: "Test",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
  {
    id: 2,
    email: "test2@gmail.com",
    password: "test1234",
    name: "Test2",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
  {
    id: 3,
    email: "test3@gmail.com",
    password: "test123",
    name: "Test3",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
  {
    id: 4,
    email: "test4@gmail.com",
    password: "test1234",
    name: "Test4",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
  {
    id: 5,
    email: "test5@gmail.com",
    password: "12232424",
    name: "Test5",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
  {
    id: 6,
    email: "test6@gmail.com",
    password: "test1234",
    name: "Test6",
    image:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473424144_9827612333934640_5624700349996052606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_0SywI0VKaG7Qmetwlu2-haGoZNMh1ReFoahk0yHVF35ctbBHxT1nT43ZhNKZiMyPFzCfyowHTs-gNIZvJSYb&_nc_ohc=61jsxIiFJywQ7kNvgENHRz8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AZDkTtACYkkh58rJpuwel_Z&oh=00_AYBwCqNpL8BnB1teTUjl6cojKbR8gVRscIKnb5cdTuePtA&oe=67957948",
  },
];

export const getUserByEmail = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find((user) => user.email === email));
    }, 1000);
  });
};
