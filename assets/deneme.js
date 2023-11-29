export const phones = [
  {
    id: 'samsung-galaxy-s22',
    name: 'Samsung Galaxy S22',
    score: 4.5,
    brand: 'Samsung',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/tr/2202/gallery/tr-galaxy-s22-ultra-s908-sm-s908edrdtur-530980041?$624_624_PNG$',
      'https://www.samsungmobilepress.com/file/8654858BA331D094C75A8F221D9E640BF01451B980312AD65270BD77DC2B9162D1352993091EE273AC8CDCF4F696630F826BE01CFE041144CC4A773280B002A9BA2E6AA16A7DAD9600C90A1DA3C56346FF7D4F0B4E48E410F8FD0658A5C5FDF0C626D6518FE9445FB9E9F763EDF0CC3609A9BB9538624A049FE53A167E5066C23E2544EC9E4FE2928102F0A09CA59A12BE54C10FCFF26785139BC6F0C6811794F47C46DF63BC42EE1E3C10EB701511BC',
      'https://www.samsungmobilepress.com/file/4D6FF4A2916EF0AD1A6D8C9433291F8A3F0D4A6CE562C30FE82225888AFC0BF1FF50436A8DB02ADF7099114645BEEC63D9F8145D7F89304D111B33B0A7875520D92417243A6BE9D94B3CDD8859B0061311F0CEA96F6496BAA333BADD23A1CCD1E4348343D6CA69031B4336797A184C205FCF2DB00F423B606CB5E88B82156101EC8F448817E1C0AC5584B804E888857C9DD0ED711A3E54250593D9650A724B6D1B0D6E844E1374FEC5032E58DEE91919D8765DD134CA2BA70011DEE0852163BB'
    ],

    price: 1099,
    screensize: 6.7,
    memory: 128,
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
        type: 'score',
        number: true,
        value: 4.5
      },
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
        type: 'wireless_charge',
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
        type: 'screen_refresh_rate',
        number: true,
        value: 120
      },
      {
        type: 'pixel_density',
        number: true,
        value: 425
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
        type: 'video_resolution',
        string: true,
        value: '4320p(Ultra HD)8K'
      },
      {
        type: 'video_fps_value',
        number: true,
        value: 60
      },
      {
        type: 'cpu_brand',
        string: true,
        value: 'qualcomm'
      },
      {
        type: 'cpu_frequency',
        number: true,
        value: 3.0
      },
      {
        type: 'cpu_cores',
        number: true,
        value: 8
      },
      {
        type: 'transistor_size',
        number: true,
        value: 4
      },
      {
        type: 'usb_type',
        string: true,
        value: 'type_c'
      },
      {
        type: 'color',
        array: true,
        value: ['black', 'white', 'green', 'purple', 'pink']
      },
      {
        type: 'headphone_jack',
        string: true,
        value: '3.5mm'
      },
      {
        type: 'cellular_connection',
        array: true,
        value: [3, 4, 4.5, 5]
      },
      {
        type: 'nfc',
        bool: true,
        value: true
      },
      {
        type: 'fingerprint_scanner',
        bool: true,
        value: false
      },
      {
        type: 'dual_sim',
        bool: true,
        value: true
      },
      {
        type: 'face_recognition',
        bool: true,
        value: true
      }
    ]
  },

  {
    id: 'xiaomi-redmi-note-10',
    name: 'Xiaomi Redmi Note 10',
    score: 4.0,
    brand: 'Xiaomi',
    images: ['https://i.gadgets360cdn.com/products/large/1614193161_635_redmi_note_10.jpg', 'image_url_2'],
    price: 229,
    screensize: 6.43,
    memory: 128,
    ram: 6,
    battery: 5000,
    cpu: { speed: 2.2, core: 'Octa-core' },
    fast_charge: true,
    camera: 48,
    screen_resolution: 'Super AMOLED',
    memory_options: [64, 128, 256],
    color_options: [{ color: '#FFC300', img: 'colored_image_url' }],
    about: [
      '6.43 inch Super AMOLED display with punch-hole',
      '48MP Quad camera setup',
      '5000mAh battery for long-lasting use',
      'Octa-core processor for smooth multitasking'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.0 },
      { name: 'price', type: 'price', unit: '$', value: 229 },
      { name: 'brand', type: 'brand', value: 'Xiaomi' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 6 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 128 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2021 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 5000 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.43 },
      { name: 'screen_technology', type: 'screen_technology', value: 'Super AMOLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 60 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 409 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 48 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 13 },
      { name: 'video_resolution', type: 'video_resolution', value: '1080p(Full HD)' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 30 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'qualcomm' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 8 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 2.2 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 8 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5, 5] },
      { name: 'color', type: 'color', value: ['black', 'white', 'red', 'yellow'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: true },
      { name: 'dual_sim', type: 'dual_sim', value: true },
      { name: 'face_recognition', type: 'face_recognition', value: false }
    ]
  },
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    score: 4.8,
    brand: 'Iphone',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1631775482000',
      'image_url_2'
    ],
    price: 1099,
    screensize: 6.7,
    memory: 256,
    ram: 6,
    battery: 4352,
    cpu: { speed: 3.2, core: 'Hexa-core' },
    fast_charge: true,
    camera: 12,
    screen_resolution: 'Super Retina XDR',
    memory_options: [128, 256, 512],
    color_options: [{ color: '#F8F8F8', img: 'colored_image_url' }],
    about: [
      '6.7 inch Super Retina XDR display with ProMotion',
      '12MP Triple camera system with Night mode',
      '4352mAh battery for all-day usage',
      'A15 Bionic chip with Neural Engine',
      'ProRAW and ProRes video recording'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.8 },
      { name: 'price', type: 'price', unit: '$', value: 1099 },
      { name: 'brand', type: 'brand', value: 'Iphone' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 6 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 256 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2021 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 4352 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.7 },
      { name: 'screen_technology', type: 'screen_technology', value: 'OLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 120 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 458 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 12 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 12 },
      { name: 'video_resolution', type: 'video_resolution', value: '2160p(Ultra HD)4K' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 60 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'qualcomm' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 6 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 3.2 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 5 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5, 5] },
      { name: 'color', type: 'color', value: ['gold', 'silver', 'graphite', 'sierra blue'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: false },
      { name: 'dual_sim', type: 'dual_sim', value: false },
      { name: 'face_recognition', type: 'face_recognition', value: true }
    ]
  },
  {
    id: 'xiaomi-redmi-note-10-pro',
    name: 'Xiaomi Redmi Note 10 Pro',
    score: 4.3,
    brand: 'Xiaomi',
    images: ['image_url_1', 'image_url_2', 'image_url_3'],
    price: 279,
    screensize: 6.67,
    memory: 128,
    ram: 6,
    battery: 5020,
    cpu: { speed: 2.3, core: 'Octa-core' },
    fast_charge: true,
    camera: 108,
    screen_resolution: 'Super AMOLED',
    memory_options: [64, 128],
    color_options: [{ color: '#ffffff', img: 'colored_image_url' }],
    about: [
      '6.67-inch Super AMOLED display with 120Hz refresh rate',
      '108MP Quad camera system',
      '5020mAh battery with 33W fast charging',
      'Snapdragon 732G processor',
      'Corning Gorilla Glass 5 protection'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.3 },
      { name: 'price', type: 'price', unit: '$', value: 279 },
      { name: 'brand', type: 'brand', value: 'Xiaomi' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 6 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 128 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2021 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 5020 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.67 },
      { name: 'screen_technology', type: 'screen_technology', value: 'Super AMOLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 120 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 395 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 108 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 16 },
      { name: 'video_resolution', type: 'video_resolution', value: '4K' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 30 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'qualcomm' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 8 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 2.3 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 8 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5, 5] },
      { name: 'color', type: 'color', value: ['gray', 'blue', 'white', 'green'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: true },
      { name: 'dual_sim', type: 'dual_sim', value: true },
      { name: 'face_recognition', type: 'face_recognition', value: false }
    ]
  },
  {
    id: 'xiaomi-redmi-note-10',
    name: 'Xiaomi Redmi Note 10',
    score: 4.3,
    brand: 'Xiaomi',
    images: ['image_url_1', 'image_url_2', 'image_url_3'],
    price: 299,
    screensize: 6.4,
    memory: 64,
    ram: 6,
    battery: 5000,
    cpu: { speed: 2.3, core: 'Octa-core' },
    fast_charge: true,
    camera: 64,
    screen_resolution: 'Super AMOLED',
    memory_options: [64, 128],
    color_options: [{ color: '#4285F4', img: 'colored_image_url' }],
    about: [
      '6.4 inch Super AMOLED display with Gorilla Glass 5 protection',
      '64MP Quad camera setup for stunning photos',
      'Snapdragon 678 processor for smooth performance',
      'Large 5000mAh battery for all-day usage',
      '18W fast charging for quick battery top-ups',
      'IR blaster for remote control functionality'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.3 },
      { name: 'price', type: 'price', unit: '$', value: 299 },
      { name: 'brand', type: 'brand', value: 'Xiaomi' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 6 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 64 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2022 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 5000 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.4 },
      { name: 'screen_technology', type: 'screen_technology', value: 'Super AMOLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 90 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 409 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 64 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 13 },
      { name: 'video_resolution', type: 'video_resolution', value: '4K' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 30 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'qualcomm' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 8 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 2.3 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 8 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5] },
      { name: 'color', type: 'color', value: ['black', 'blue', 'red'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: false },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: true },
      { name: 'dual_sim', type: 'dual_sim', value: true },
      { name: 'face_recognition', type: 'face_recognition', value: false }
    ]
  },
  {
    id: 'lg-velvet-5g',
    name: 'LG Velvet 5G',
    score: 4.2,
    brand: 'LG',
    images: ['image_url_1', 'image_url_2', 'image_url_3'],
    price: 599,
    screensize: 6.8,
    memory: 128,
    ram: 6,
    battery: 4300,
    cpu: { speed: 2.8, core: 'Octa-core' },
    fast_charge: true,
    camera: 48,
    screen_resolution: 'POLED',
    memory_options: [128, 256],
    color_options: [{ color: '#1a75ff', img: 'colored_image_url' }],
    about: [
      '6.8 inch POLED FullVision display with Waterdrop Camera',
      'Triple rear camera setup with AI capabilities',
      'MediaTek Dimensity 1000C processor for efficient performance',
      'Large 4300mAh battery for extended usage',
      'Fast charging and wireless charging support',
      'IP68 certified for water and dust resistance'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.2 },
      { name: 'price', type: 'price', unit: '$', value: 599 },
      { name: 'brand', type: 'brand', value: 'LG' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 6 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 128 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2020 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 4300 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.8 },
      { name: 'screen_technology', type: 'screen_technology', value: 'POLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 90 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 395 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 48 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 16 },
      { name: 'video_resolution', type: 'video_resolution', value: '4K' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 60 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'mediatek' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 8 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 2.8 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 7 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5, 5] },
      { name: 'color', type: 'color', value: ['blue', 'silver', 'white'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: true },
      { name: 'dual_sim', type: 'dual_sim', value: false },
      { name: 'face_recognition', type: 'face_recognition', value: false }
    ]
  },
  {
    id: 'oneplus-9t-pro',
    name: 'OnePlus 9T Pro',
    score: 4.7,
    brand: 'OnePlus',
    images: ['image_url_1', 'image_url_2', 'image_url_3'],
    price: 899,
    screensize: 6.9,
    memory: 256,
    ram: 12,
    battery: 5000,
    cpu: { speed: 3.2, core: 'Octa-core' },
    fast_charge: true,
    camera: 64,
    screen_resolution: 'Fluid AMOLED',
    memory_options: [128, 256, 512],
    color_options: [{ color: '#ff4500', img: 'colored_image_url' }],
    about: [
      '6.9 inch Fluid AMOLED display with 120Hz refresh rate',
      'Triple rear camera setup with Hasselblad collaboration',
      'Qualcomm Snapdragon 888 processor for top-tier performance',
      'Large 5000mAh battery for extended usage',
      'Warp Charge 65T for ultra-fast charging',
      'OxygenOS based on Android 12 for a smooth user experience'
    ],
    details: [
      { name: 'score', type: 'score', unit: 'point', value: 4.7 },
      { name: 'price', type: 'price', unit: '$', value: 899 },
      { name: 'brand', type: 'brand', value: 'OnePlus' },
      { name: 'ram', type: 'ram', unit: 'gb', value: 12 },
      { name: 'memory', type: 'memory', unit: 'gb', value: 256 },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'release_date', type: 'release_date', unit: 'year', value: 2022 },
      { name: 'battery', type: 'battery', unit: 'mAh', value: 5000 },
      { name: 'screen_size', type: 'screen_size', unit: 'inch', value: 6.9 },
      { name: 'screen_technology', type: 'screen_technology', value: 'Fluid AMOLED' },
      { name: 'screen_refresh_rate', type: 'screen_refresh_rate', unit: 'hz', value: 120 },
      { name: 'pixel_density', type: 'pixel_density', unit: 'PPI', value: 516 },
      { name: 'camera_resolution', type: 'camera_resolution', unit: 'mp', value: 64 },
      { name: 'front_camera_resolution', type: 'front_camera_resolution', unit: 'mp', value: 16 },
      { name: 'video_resolution', type: 'video_resolution', value: '8K' },
      { name: 'video_fps_value', type: 'video_fps_value', unit: '', value: 30 },
      { name: 'cpu_brand', type: 'cpu_brand', value: 'qualcomm' },
      { name: 'cpu_cores', type: 'cpu_cores', value: 8 },
      { name: 'cpu_frequency', type: 'cpu_frequency', unit: 'GHz', value: 3.2 },
      { name: 'transistor_size', type: 'transistor_size', unit: 'nm', value: 5 },
      { name: 'usb_type', type: 'usb_type', value: 'type_c' },
      { name: 'headphone_jack', type: 'headphone_jack', value: '3.5mm' },
      { name: 'cellular_connection', type: 'cellular_connection', value: [3, 4, 4.5, 5] },
      { name: 'color', type: 'color', value: ['red', 'black', 'silver'] },
      { name: 'fast_charge', type: 'fast_charge', value: true },
      { name: 'wireless_charge', type: 'wireless_charge', value: true },
      { name: 'nfc', type: 'nfc', value: true },
      { name: 'fingerprint_scanner', type: 'fingerprint_scanner', value: true },
      { name: 'dual_sim', type: 'dual_sim', value: true },
      { name: 'face_recognition', type: 'face_recognition', value: true }
    ]
  }
];
