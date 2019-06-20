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
    serializer_class = ParentSerializer

    def get_queryset(self):
        queryset = Parent.objects.all()
        email = self.request.query_params.get("email", None)
        password = self.request.query_params.get("password", None)
        # print(self.request.data, email, password)
        # print(self.request.query_params, email, password)
        return queryset.filter(email=email, password=password)


class MediaViewSet(viewsets.ModelViewSet):
    serializer_class = MediaSerializer

    def get_queryset(self):
        queryset = Media.objects.all()
        role = self.request.query_params.get("role", None)
        return queryset.filter(role=role)


class ChildViewSet(viewsets.ModelViewSet):
    serializer_class = ChildSerializer

    def get_queryset(self):
        queryset = Child.objects.all()
        parent_id = self.request.query_params.get("parent_id", None)
        return queryset.filter(parent_id=parent_id)


class AchievementsViewSet(viewsets.ModelViewSet):
    queryset = Achievements.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AchievementsSerializer
