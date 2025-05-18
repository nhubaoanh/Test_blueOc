bước 1 : ta cho một mảng tên arr
bước 2 : tạo một hàm có tên getMaxLength truyên tham số đầu vào là một mảng 
bước 3 : khởi tạo ra một biến tên getCount để chứa phần tử có độ dài dài nhất biến này ban đầu là một object rỗng 
bước 4 : dùng vòng lặp forEach duyệt toàn bộ mảng khởi tạo biến len chứa độ dài của mảng đó, 
tiếp theo dùng biến lengCout[len] được gán bàng độ dài của chuỗi đầu tiên nếu không có thì sẽ gán bàng 0 
bước 5 : khởi tạo biến maxCount gán bằng 0 để gán giá trị lớn nhất sau khi tìm được 
bước 6 : khởi tạo biến mostFrequentLengths được gán bằng mảng rỗng biến này sẽ chứa những phần tử có độ dài nhất 
bước 7 : dùng vòng lặp for để lặp tìm kiếm độ dài cấc phần tử trong mảng nếu tìm thấy thì đẩy vào mostFrequentLengths
bước 8 : trả về mảng chứa các phần tử có độ dài nhất 