from django.test import TestCase
from django.test import Client

class GetChildInfo(TestCase):   
       def setUp(self):
           # creating instance of a client.
           self.client = Client()
       def test_getchild(self):
           # Issue a GET request.
           response = self.client.get('/Child/')
           # Check that the response is 200 OK.
           print(response)
           self.assertEqual(response.status_code, 200)
class GetParentInfo(TestCase):   
       def setUp(self):
           # creating instance of a client.
           self.client = Client()
       def test_getparent(self):
           # Issue a GET request.
           response = self.client.get('/Parent/')
           # Check that the response is 200 OK.
           print(response)
           self.assertEqual(response.status_code, 200)
class GetMediaInfo(TestCase):   
       def setUp(self):
           # creating instance of a client.
           self.client = Client()
       def test_getmedia(self):
           # Issue a GET request.
           response = self.client.get('/Media/')
           # Check that the response is 200 OK.
           print(response)
           self.assertEqual(response.status_code, 200)

class GetAch(TestCase):   
       def setUp(self):
           # creating instance of a client.
           self.client = Client()
       def test_getach(self):
           # Issue a GET request.
           response = self.client.get('/Ach/')
           # Check that the response is 200 OK.
           print(response)
           self.assertEqual(response.status_code, 200)
           from django.test import TestCase

class Postparent(TestCase):
       def setUp(self):
           self.client = Client()
       def test_addchild(self):
           response = self.client.post('/Parent/',{'name':'name','email':'abc@abc.com','password':123})
           self.assertEqual(response.status_code, 201)

class Postmedia(TestCase):
       def setUp(self):
           self.client = Client()
       def test_addmedia(self):
           response = self.client.post('/Media/',{'img_url':'urlofimage','role':'role','level':1})
           self.assertEqual(response.status_code, 201)
           
