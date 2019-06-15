from rest_framework import routers
from .api import ParentViewSet
from .api import MediaViewSet
from .api import ChildViewSet
from .api import AchievementsViewSet

router=routers.DefaultRouter()
router.register('Parent',ParentViewSet,'myapp')
router.register('api/myapp/Media',MediaViewSet,'myapp')
router.register('api/myapp/Child',ChildViewSet,'myapp')
router.register('api/myapp/Ach',AchievementsViewSet,'myapp')

urlpatterns=router.urls