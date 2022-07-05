import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist: Song[] = [
    {
      id: 'NIJHqNWMtAw',
      name: 'Đừng Quên Tên Anh - Hoa Vinh | Official Music Video (4k)'
    },
    {
      id: 'e2Xx7WcvEns',
      name: 'QUÂN A.P - BÔNG HOA ĐẸP NHẤT [OFFICIAL LYRICS VIDEO]'
    },
    {
      id: '8zRy02Wl1JA',
      name: 'THƯƠNG EM ĐẾN GIÀ | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO'
    },
    {
      id: 'g1E9TgU_DI8',
      name: 'Giá Như 1 Lần Cưới Em (当我娶过她) - Khánh Phương | Người Anh Thương Đã Từng Thương Anh | Official MV 4K'
    },
    {
      id: 'ceSd7Hu40NI',
      name: 'TRỌN VẸN NGHĨA TÌNH - OST PHÚC CỌP | ƯNG HOÀNG PHÚC - WOWY | OFFICIAL MUSIC VIDEO'
    }
  ];

  constructor() {
  }

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
