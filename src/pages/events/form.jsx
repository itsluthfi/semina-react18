import {
  CloseButton,
  Col,
  Figure,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Button from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SelectBox from '../../components/SelectBox';
import { config } from '../../configs';

export default function EventsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  lists,
  handlePlusKeyPoint,
  handleChangeKeyPoint,
  handleMinusKeyPoint,
  handlePlusTicket,
  handleMinusTicket,
  handleChangeTicket,
}) {
  return (
    <Form className="mb-2">
      <Row>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan judul'}
            label={'Title'}
            name="title"
            value={form.title}
            type="text"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan tagline'}
            label={'Tagline'}
            name="tagline"
            value={form.tagline}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan tanggal acara'}
            label={'Date'}
            name="date"
            value={form.date}
            type="datetime-local"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <SelectBox
            label={'Category'}
            placeholder={'Masukan kategori'}
            name="category"
            value={form.category}
            options={lists.categories}
            isClearable={true}
            handleChange={(e) => handleChange(e)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan keterangan'}
            label={'About'}
            name="about"
            value={form.about}
            type="text"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan tempat acara'}
            label={'Venue'}
            name="venueName"
            value={form.venueName}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Form.Label>Key Point</Form.Label>
      <Row>
        {form.keyPoint.map((key, index) => (
          <Col sm={6}>
            <InputGroup className="mb-3" key={index}>
              <FormControl
                placeholder="Masukan key point"
                value={key}
                type="text"
                name="key"
                onChange={(e) => {
                  handleChangeKeyPoint(e, index);
                }}
              />
              {index !== 0 && (
                <InputGroup.Text id="basic-addon2">
                  <CloseButton onClick={() => handleMinusKeyPoint(index)} />
                </InputGroup.Text>
              )}
            </InputGroup>
          </Col>
        ))}
      </Row>
      <div className="mb-3">
        <Button variant="success" action={handlePlusKeyPoint} size="sm">
          Tambah Key Point
        </Button>
      </div>

      <Row>
        <Col>
          <SelectBox
            label={'Talent'}
            placeholder={'Masukan pembicara'}
            name="talent"
            value={form.talent}
            options={lists.talents}
            isClearable={true}
            handleChange={(e) => handleChange(e)}
          />
        </Col>
        <Col>
          <TextInputWithLabel
            placeholder={'Masukan Avatar'}
            label={'Cover'}
            name="avatar"
            // value={form.avatar}
            type="file"
            onChange={handleChange}
          />
          {form.avatar !== '' && (
            <div>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={`${config.api_image}/${form.avatar}`}
                />
                <Figure.Caption>Perview image cover</Figure.Caption>
              </Figure>
            </div>
          )}
        </Col>
      </Row>

      <Form.Label>Ticket</Form.Label>

      {form.tickets.map((tic, index) => (
        <Row>
          <Col sm={6}>
            <TextInputWithLabel
              placeholder={'Masukan tipe tiket'}
              label={'Type'}
              name="type"
              value={tic.type}
              type="text"
              onChange={(e) => handleChangeTicket(e, index)}
            />
          </Col>
          <Col sm={6}>
            <TextInputWithLabel
              placeholder={'Masukan harga'}
              label={'Price'}
              name="price"
              value={tic.price}
              type="number"
              onChange={(e) => handleChangeTicket(e, index)}
            />
          </Col>
          <Col sm={6}>
            <TextInputWithLabel
              placeholder={'Masukan stok tiket'}
              label={'Stock'}
              name="stock"
              value={tic.stock}
              type="number"
              onChange={(e) => handleChangeTicket(e, index)}
            />
          </Col>
          <Col sm={index !== 0 ? 5 : 6}>
            <TextInputWithLabel
              placeholder={'Masukan status'}
              label={'Status'}
              name="status"
              value={tic.status}
              type="text"
              onChange={(e) => handleChangeTicket(e, index)}
            />
          </Col>
          {index !== 0 && (
            <Col
              sm={1}
              className="d-flex justify-content-end align-items-center"
            >
              <CloseButton onClick={() => handleMinusTicket(index)} />
            </Col>
          )}
        </Row>
      ))}
      <div className="mb-3">
        <Button variant="success" action={handlePlusTicket} size="sm">
          Tambah Tiket
        </Button>
      </div>

      <Button variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? 'Ubah' : 'Simpan'}
      </Button>
    </Form>
  );
}
