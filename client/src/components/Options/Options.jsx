import { useState } from "react"

export const Options = () => {
  const [shopname, setShopname] = useState("")
  const [qtydigits, setQtydigits] = useState("")
  const [usebranch, setUsebranch] = useState("")

  console.log(shopname, qtydigits, usebranch)

  return (
    <div className='container mt-5 py-5'>
      <div className='col-12  col-md-5 col-xl-4  '>
        <div className='card'>
          <div className='card-body'>
            <h4>Основнi налаштування</h4>
            <small>Після зміни налаштувань слід перелогінитись</small>

            <form
              id='common'
              method='post'
              name='common'
              onSubmit={(e) => e.preventDefault()}
            >
              <div className='form-group'>
                <label htmlFor='shopname'>Назва сайту </label>
                <input
                  className='form-control'
                  type='text'
                  id='shopname'
                  value={shopname}
                  onChange={(e) => setShopname(e.target.value)}
                />
                <small> Назва для логотипу та сторiнки логiну. </small>
              </div>

              <div className='form-group  '>
                <label htmlFor='qtydigits'>
                  Знаків після крапки в кількості
                </label>

                <select
                  
                  className='form-control'
                  id='qtydigits'
                  value={qtydigits}
                  onChange={(e) => setQtydigits(e.target.value)}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <div className='form-group  '>
                <label htmlFor='amdigits'>Округлення вартості</label>

                <select className='form-control' id='amdigits' name='amdigits'>
                  <option value='0'>Без копійок</option>
                  <option value='1'>До 1 копійки</option>
                  <option value='5'>До 5 копійок</option>
                  <option value='10'>До 10 копійок</option>
                </select>
              </div>
              <div className='form-group  '>
                <label htmlFor='dateformat'>Формат дати</label>

                <select
                  className='form-control'
                  id='dateformat'
                  name='dateformat'
                >
                  <option value='d.m.Y'>dd.mm.yyyy</option>
                  <option value='d-m-Y'>dd-mm-yyyy</option>
                  <option value='d/m/Y'>dd/mm/yyyy</option>
                  <option value='Y.m.d'>yyyy.mm.dd</option>
                  <option value='Y-m-d'>yyyy-mm-dd</option>
                  <option value='Y/m/d'>yyyy/mm/dd</option>
                </select>
              </div>

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='usebranch'
                  value={usebranch}
                  onChange={(e) => setUsebranch(e.target.value)}
                />
                <label className='form-check-label' htmlFor='usebranch'>
                  Використання філій{" "}
                </label>
                <i
                  className='fa fa-info-circle  '
                  data-original-title="Філії (наприклад, торгові точки) використовуються для поділу доступу до ресурсів. Співробітники філії мають доступ до документів, складів і кас тільки вказаної філії. Відпускні ціни товарів запам'ятовуються в прив'язці до поточної філії."
                ></i>
              </div>

              <div className='form-group'>
                <button className='btn btn-primary' type='submit'>
                  Зберегти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
