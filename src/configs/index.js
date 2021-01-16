import { images } from '../../assets/images'
import { Colors } from '../../assets/styles'

export const SCREEN_NAME = {
  trangChu: 'trangChu',
  khamPha: 'khamPha',
  gioHang: 'gioHang',
  taiKhoan: 'taiKhoan',
  ThongTinTaiKhoan: 'ThongTinTaiKhoan',
  MainTab: 'MainTab',
  SplashScreen: 'SplashScreen',
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  ChiTietSP: 'ChiTietSP',
  DanhSachSP: 'DanhSachSP',
  UpdateUserProfile: 'UpdateUserProfile',
  TopKScreen: 'TopKScreen',
  SanPhamTopK: 'SanPhamTopK',
  DanhSachSPTopK: 'DanhSachSPTopK',

}

export const sizeData = [
  '6', '6.5', '7', '7.5', '8', '8.5',
]

export const colorData = [
  Colors.primaryYellow,
  Colors.primaryBlue,
  Colors.primaryRed,
  Colors.primaryGreen,
  Colors.primaryPulple,
  Colors.neutralDark,
]

export const TAB_DATA = [
  {
    title: 'Trang chu',
    image: images.trangchu,
  },
  {
    title: 'Kham pha',
    image: images.timKiem,
  },
  {
    title: 'Cart',
    image: images.gioHang,
  },

  {
    title: 'Account',
    image: images.taiKhoan,
  },
]

export const API_URL = 'http://192.168.1.68:3000'
// export const API_URL_TOPK = 'http://192.168.1.9:5001'
export const API_URL_TOPK = 'https://localhost:5001'

export const DataItem = [
  {
    image: images.dacnhantam,
    title: 'Đắc Nhân Tâm',
    price: '160.000',
  },
  {
    image: images.tatden,
    title: 'Tắt Đèn',
    price: '300.000',
  }, {
    image: images.nhatkytrongtu,
    title: 'Nhật ký Trong Tù',
    price: '150.000',
  }, {
    image: images.dacnhantam,
    title: 'Giáo Trình Photoshop',
    price: '360.000',
  }, {
    image: images.dacnhantam,
    title: 'Có Thể Bạn Chưa biết',
    price: '120.000',
  },
]

export const Danhsachsp = [
  {
    image: images.hoihoa,
    title: 'Hội Họa',

  },
  {
    image: images.nhiepanh,
    title: 'Nhiếp Ảnh',

  }, {
    image: images.thethao,
    title: 'Thể Thao',

  }, {
    image: images.khoahoc,
    title: 'Khoa Học',

  }, {
    image: images.tinhoc,
    title: 'Tin Học',

  },
  {
    image: images.amnhac,
    title: 'Âm Nhạc',

  },
  {
    image: images.amthuc,
    title: 'Ẩm Thực',

  },
  {
    image: images.hoihoa,
    title: 'Hội Họa',

  },
  {
    image: images.thoitrang,
    title: 'Thời Trang',

  },
]
