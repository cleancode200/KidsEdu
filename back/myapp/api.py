from myapp.models import Parent
from myapp.models import Media
from myapp.models import Child
from myapp.models import Achievements

from rest_framework import viewsets, permissions
from .serializers import ParentSerializer
from .serializers import MediaSerializer
from .serializers import ChildSerializer
from .serializers import AchievementsSerializer


class ParentViewSet(viewsets.ModelViewSet):
    queryset = Parent.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ParentSerializer


class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MediaSerializer


class ChildViewSet(viewsets.ModelViewSet):
    queryset = Child.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ChildSerializer


class AchievementsViewSet(viewsets.ModelViewSet):
    queryset = Achievements.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AchievementsSerializer
