from django.test import TestCase
# import all the table models 
# manage.py test
from myapp.models import Parent
from myapp.models import Media
from myapp.models import Child
from myapp.models import Achievements
# test table of Parent
class ParentTestCase(TestCase):
    def setUp(self):
        Parent.objects.create(name="abd", email="abd@gmail.com",password="123")
        Parent.objects.create(name="yousef", email="yousef@gmail.com",password="123")

        # Create your tests here.
    def test_parent(self):
        user = Parent.objects.get(email="abd@gmail.com")
        user1 = Parent.objects.get(email="yousef@gmail.com")
        self.assertEqual(user.password,"123")
        self.assertEqual(user1.password,"123")
        self.assertEqual(user1.name,"yousef")

class MediaTestCase(TestCase):
    def setUp(self):
        image=Media.objects.create(img_url="xyz@firbase.com", role=2,level=4)
        # Child.objects.create(name="ahmad",age=5,parent_id=1)
        # Create your tests here.
    def test_Media(self):
        user=Media.objects.get(role=2,level=4)
        self.assertEqual(user.img_url,"xyz@firbase.com")
class AchievementsTestCase(TestCase):
    def setUp(self):
        user=Parent.objects.create(name="abd", email="abd@gmail.com",password="123")
        child=Child.objects.create(parent_id=user,name="haha",age=5)
        entry=Achievements.objects.create(child_id=child,language_letters_level=0,language_animals_level=0,language_planets_level=4,total_time=14,clicks=32)
        # Child.objects.create(name="ahmad",age=5,parent_id=1)
        # Create your tests here.
    def test_Achievements(self):
        entry=Achievements.objects.get(child_id=1,language_letters_level=0,language_animals_level=0,language_planets_level=4)
        self.assertEqual(entry.clicks,32)
class ChildTestCase(TestCase):
    def setUp(self):
        user1=Parent.objects.create(name="abd", email="abd@gmail.com",password="123")
        Child.objects.create(name="soso",age=4,parent_id=user1)
        # Child.objects.create(name="ahmad",age=5,parent_id=1)
        # Create your tests here.
    def test_child(self):
        
        user1=Child.objects.get(name="soso")
        self.assertEqual(user1.age,4)
        
        
       


        
