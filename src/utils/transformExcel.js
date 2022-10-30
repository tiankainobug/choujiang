
import message from "element-ui/packages/message";
import * as XLSX from "xlsx";


export const transformExcel = f => {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader()
        reader.onload = e => {
            let data = []
            const {result} = e.target
            try {
                // 以二进制读取整份excel表格对象
                const workbook = XLSX.read(result,{type:'binary'})
                // 遍历工作表进行读取
                for (const sheet in workbook.Sheets){
                    data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
                }
            }catch (err){
                message.error('文件类型不匹配')
                return
            }
            resolve(data)
        }
        reader.readAsBinaryString(f)
    })
}
