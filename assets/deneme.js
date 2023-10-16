export const phones = [
  {
    id: 'samsung-galaxy-s22',
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    img: 'https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png',
    price: 1099,
    screensize: 6.7,
    memory: [128, 256, 512],
    ram: 8,
    battery: 4000,
    cpu: {
      speed: 3.0,
      core: 'Octa-core'
    },
    fast_charge: true,
    camera: 48,
    screen_resolution: 'Super Retina XDR',
    memory_options: [128, 256, 512],
    color_options: [{ color: '#fc34a5', img: 'colored image url' }],
    about: [
      '6.7 inch Super Retina XDR display with Always On and ProMotion',
      'Dynamic Island, a magical way to experience your Iphone',
      '48MP Main camera with up to 4x the resolution',
      'Cinematic mode shooting 4K Dolby Vision at up to 30 frames per second',
      'Motion mode for smooth, jitter-free videos',
      'All-day battery life and up to 23 hours of video playback.'
    ],
    details: [
      {
        type: 'price',
        number: true,
        value: 1099
      },
      {
        type: 'brand',
        string: true,
        value: 'Samsung'
      },
      {
        type: 'ram',
        number: true,
        value: 6
      },
      {
        type: 'memory',
        number: true,
        value: 128
      },

      {
        type: 'fast_charge',
        bool: true,
        value: true
      },
      {
        type: 'release_date',
        number: true,
        value: 2021
      },
      {
        type: 'battery',
        number: true,
        value: 4000
      },
      {
        type: 'screen_size',
        number: true,
        value: 6.7
      },
      {
        type: 'screen_technology',
        string: true,
        value: 'OLED'
      },
      {
        type: 'camera_resolution',
        number: true,
        value: 48
      },
      {
        type: 'front_camera_resolution',
        number: true,
        value: 12
      },
      {
        type: 'cellular_connection',
        array: true,
        value: [3, 4, 4.5, 5]
      }
    ]
  },
  {
    id: 'iphone-14-pro',
    name: 'IPhone 14 Pro',
    brand: 'Iphone',
    img: 'https://www.kvk.com/images/Product/23092022151344_ip14promdeeppurple.png',
    price: 1099,
    screensize: 6.7,
    memory: [128, 256, 512],
    ram: 8,
    battery: 4000,
    cpu: {
      speed: 3.0,
      core: 'Octa-core'
    },
    fast_charge: true,
    camera: 48,
    screen_resolution: 'Super Retina XDR',
    memory_options: [128, 256, 512],
    color_options: [{ color: '#fc34a5', img: 'colored image url' }],
    about: [
      '6.7 inch Super Retina XDR display with Always On and ProMotion',
      'Dynamic Island, a magical way to experience your Iphone',
      '48MP Main camera with up to 4x the resolution',
      'Cinematic mode shooting 4K Dolby Vision at up to 30 frames per second',
      'Motion mode for smooth, jitter-free videos',
      'All-day battery life and up to 23 hours of video playback.'
    ],
    details: [
      {
        type: 'price',
        number: true,
        value: 1599
      },
      {
        type: 'brand',
        string: true,
        value: 'Iphone'
      },
      {
        type: 'ram',
        number: true,
        value: 128
      },
      {
        type: 'fast_charge',
        bool: true,
        value: true
      },
      {
        type: 'cellular_connection',
        array: true,
        value: [2, 3]
      }
    ]
  }
];
